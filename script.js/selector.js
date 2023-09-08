 import { createVueCountries } from "./createView";

 export function continentModification(event, countries) {
  const selectedContinent = event.target.value;
  const selectedContinentFirstLetterUppercase = selectedContinent.charAt(0).toUpperCase() + selectedContinent.slice(1);

  if( selectedContinent != "world"){
    const countriesChoiceDisplay = countries.filter(country => country.region[0].includes(`${selectedContinentFirstLetterUppercase}`));
    createVueCountries(countriesChoiceDisplay)
  } else {
    createVueCountries(countries)
  }
 

 }
/**

  if (selectedContinent === "africa") {
    const countriesAfrica = countries.filter(country => country.region[0] === "Africa");
    console.log(countriesAfrica);
  } else if (selectedContinent === "america") {
    const countriesAmerica = countries.filter(country => country.region[0].includes("America"));
    console.log(countriesAmerica);
  } else if (selectedContinent === "asia") {
    const countriesAsia = countries.filter(country => country.region[0] === "Asia");
    console.log(countriesAsia);
  } else if (selectedContinent === "europe") {
    const countriesEurope = countries.filter(country => country.region[0] === "Europe");
    console.log(countriesEurope);
  } else if (selectedContinent === "oceania") {
    const countriesOceania = countries.filter(country => country.region[0] === "Oceania");
    console.log(countriesOceania);
  } else {
    const countriesWorld = countries;
    console.log(countriesWorld);
  }
 * 
 */
