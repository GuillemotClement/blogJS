//importation du fichier style
import '../assets/styles/styles.scss';
import './form.scss';

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors');
//tableau qui contient les différentes erreurs
let errors = [];

form.addEventListener('submit', event => {
    //on empeche rechargement par défaut de la page
    event.preventDefault();
    //on récupère les données du formulaire
    const formData = new FormData(form);

    const article = Object.fromEntries(formData.entries());
    //gestion d'erreur sur l'objet avant l'envoie au serveur
    if(formIsValid(article)){
         //on vient convertir les données dans un objet au format JSON
        const objJson = JSON.stringify(article);
    }
});


const formIsValid = (article) => {
    //on vérifie si les champs sont tous remplie
    if(!article.author || !article.category || !article.content){
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
    }else{
        errorElement.innerHTML = '';
    }
}



