import { callApi } from "./script.js/api";
import { Country } from "./class/Country";
import { createVueCountries } from "./script.js/createView";
import { continentModification} from "./script.js/selector.js" ;
import { searchCountryDisplay } from "./script.js/search";
import "./script.js/toggleColorMode";
import "./style.scss";
const countries = [];
const apiUrl = "https://restcountries.com/v3.1/all";
const apiUrlAbbreviation = "https://restcountries.com/v3.1/alpha/"
  


async function processData() {  
  try {
    const apiData = await callApi(apiUrl);

    // Manipulez les données ici comme vous le souhaitez
    apiData.forEach((apiCountry) => {
      // Créez un nouvel objet Country en utilisant les données de l'API
      const country = new Country(
        apiCountry.flag,
        apiCountry.flags.alt,
        apiCountry.name.common,
        apiCountry.name.nativeName,
        apiCountry.population.toLocaleString(),
        apiCountry.continents,
        apiCountry.subregion,
        apiCountry.capital,
        apiCountry.tld,
        apiCountry.currencies,
        apiCountry.languages,
        apiCountry.borders,
        apiCountry.altSpellings[0]
      );

      // Ajoutez le pays à votre tableau de pays
      countries.push(country);
    });

    createVueCountries(countries);
  } catch (error) {
    // Gérez les erreurs ici
    console.error(error);
  }
}

processData(); // Appelez la fonction pour démarrer le traitement des données


// selector form
const selectElement = document.querySelector('select[name="continent"]');
selectElement.addEventListener("change", (event) => continentModification(event, countries));


const searchElement = document.querySelector(".search-input-js")
searchElement.addEventListener("input", (e) => {
  searchCountryDisplay(e,countries);
});


// Sélectionnez le bouton
const scrollToTopButton = document.querySelector('.btn-return');

// Affichez le bouton lorsque la page est défilée de plus de 200 pixels
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Faites défiler la page vers le haut lorsque le bouton est cliqué
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Un défilement fluide
    });
});


