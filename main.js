import { callApi } from "./script.js/api";
import { Country } from "./class/Country";
import { createVueCountries } from "./script.js/createView";
import "./script.js/toggleColorMode";
import "./script.js/selector.js";
import "./style.scss";
const countries = [];

async function processData() {
  try {
    const apiData = await callApi();

    // Manipulez les données ici comme vous le souhaitez
    apiData.forEach((apiCountry) => {
      // Créez un nouvel objet Country en utilisant les données de l'API
      const country = new Country(
        apiCountry.flag,
        apiCountry.flags.alt,
        apiCountry.name.common,
        apiCountry.name.nativeName,
        apiCountry.population,
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
