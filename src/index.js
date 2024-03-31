import './assets/styles/styles.scss';
import './index.scss';
import './assets/js/topbar.js';

const articleContainerElement = document.querySelector('.articles-container');

const createArticles = (articles) => {
    const articlesDOM = articles.map(article => {
        const articleDOM = document.createElement('div');
        articleDOM.classList.add('article');
        articleDOM.innerHTML = `
            <img src="${ article.img }" alt="profil">
            <h2>${ article.title }</h2>
            <p class="article-author">${ article.author } - ${ article.category }</p>
            <p class="article-content">${ article.content }</p>
            <div class="article-action">
                <button class="btn btn-danger" data-id=${ article._id }>Supprimer</button>
            </div> 
        `;
        return articleDOM;
    });
    articleContainerElement.innerHTML = '';
    articleContainerElement.append(...articlesDOM);
    const deleteButtons =  articleContainerElement.querySelectorAll(".btn-danger");
    deleteButtons.forEach(button => {
        button.addEventListener('click', async event => {
            try{
                const target = event.target;
                const articleId = target.dataset.id;
                const response = await fetch(
                    `https://restapi.fr/api/articles/${ articleId }`,
                    {
                    method: "DELETE",
                    }
                );
                const body = await response.json();
                console.log(body);
                fetchArticle();
            }catch(e){
                console.log('erreur : ', e);
            }
        })
    })
};

//on définit la fonction pour récupérer les données du back end
const fetchArticle = async () => {
    try{
        const response = await fetch("https:restapi.fr/api/articles");
        let articles = await response.json();
        if(!Array.isArray(articles)){
            articles = [articles];
        }
        createArticles(articles);
    } catch(e){
        console.log('erreur : ', e);
    }
}

//on appelle la fonction pour afficher les données
fetchArticle();