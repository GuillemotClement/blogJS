//importation du fichier style
import '../assets/styles/styles.scss';
import './form.scss';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    //on empeche rechargement par défaut de la page
    event.preventDefault();

    //on viens créer un nouvel FormData pour récupérer facilement les valeurs du formulaire
    const formData = new FormData(form);
    //on les convertis ensuite en JSON pour les envoyer sur le serveur
    //entries() retourne un objet itérable
    //la variable entries stocke les input
    const entries = formData.entries();
    
    //on parcours le tableau avec une boucle for
    // for(let entry of entries){
    //     //affichage de chaque entrée du formulaire
    //     //on obtient un tableau avec la premiere valeur est le name de l'input
    //     //seconde valeur est la valeur dans l'input
    //     console.log(entry);
    // }

    //creation d'un tableau avec les valerurs du formulaire
    //conversion du tableau en objet
    // const obj = Array.from(entries).reduce((acc, value ) => {
    //     acc[value[0]] = value[1];
    //     return acc;
    // }, {});
    //on obtient un objet js qui contient toutes les valeurs du formulaire
    // console.log(obj);
    
    //methode opti
    const obj = Object.fromEntries(entries);
    // console.log(obj);

    //on convertis en objet json avant l'envoie sur le serveur
    const json = JSON.stringify(obj);
    // console.log(json);
})






