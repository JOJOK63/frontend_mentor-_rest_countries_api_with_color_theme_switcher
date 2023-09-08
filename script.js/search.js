import { createVueCountries } from "../script.js/createView";
export function searchCountryDisplay(e,countries){
    const valueInput = e.target.value;
    const countriesSearch = countries.filter(country => country.name.toLowerCase().includes(`${valueInput.toLowerCase()}`)); 
    createVueCountries(countriesSearch)
}