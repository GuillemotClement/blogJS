//importation du fichier style
import '../assets/styles/styles.scss';
import './form.scss';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    //on empeche rechargement par défaut de la page
    event.preventDefault();

    //on récupère les données du formulaire
    const formData = new FormData(form);

    //on vient convertir les données dans un objet au format JSON
    const objJson = JSON.stringify(Object.fromEntries(formData.entries()));

    

})


//11:2



