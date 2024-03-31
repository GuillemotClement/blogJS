//importation du fichier style
import '../assets/styles/styles.scss';
import './form.scss';
import '../assets/js/topbar.js'

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors');
//tableau qui contient les différentes erreurs
let errors = [];

form.addEventListener('submit', async event => {
    //on empeche rechargement par défaut de la page
    event.preventDefault();
    //on récupère les données du formulaire
    const formData = new FormData(form);

    const article = Object.fromEntries(formData.entries());
    //gestion d'erreur sur l'objet avant l'envoie au serveur
    if(formIsValid(article)){
        try{
            const json = JSON.stringify(article);
            const response = await fetch("https://restapi.fr/api/articles", {
                method: 'POST',
                body: json,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const body = await response.json();
            console.log(body);
        }catch(e){
            console.error('error : ', e);
        }
    }
});


const formIsValid = (article) => {
    //on vérifie si les champs sont tous remplie
    if(!article.author || !article.category || !article.content || !article.title){
        errors.push('Vous devez renseigner tous les champs')
    }else{
        errors = [];
    };
    if(errors.length){
        let errorHTML = '';
        errors.forEach( (e) => {
            errorHTML+= `<li>${e}</li>`
        })
        errorElement.innerHTML = errorHTML;
        return false;
    }else{
        errorElement.innerHTML = '';
        return true;
    }
}



