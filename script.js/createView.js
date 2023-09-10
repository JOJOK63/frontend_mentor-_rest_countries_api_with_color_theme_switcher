const grid_countries = document.querySelector(".js-grid-countries");
import { addListenerToCard } from "./card-details";
export function createVueCountries(countries) {
  grid_countries.innerText = "";
  countries.forEach((country) => {
    const initalNameCountry = country.altSpellings
      .replace(/[\s-]+/g, "")
      .toLowerCase();

    const card = document.createElement("div");
    card.classList.add("country-card");

    const flag = document.createElement("div");
    flag.classList.add("country-flag");
    flag.style.backgroundImage = `url('https://flagcdn.com/${initalNameCountry}.svg')`;

    const divInformation = document.createElement("div");
    divInformation.classList.add("country-information");

    const title = document.createElement("h1");
    title.classList.add("country-title");
    title.innerText = country.name;

    const ul = document.createElement("ul");

    
    const liPopulation = document.createElement("li");
    const spanPopulation = document.createElement("span");
    spanPopulation.innerText = "Population: ";
    const pPopulation = document.createElement("p");
    pPopulation.innerText = country.population;
    liPopulation.append(spanPopulation);
    liPopulation.append(pPopulation);
    
    const liRegion = document.createElement("li");
    const spanRegion = document.createElement("span");
    spanRegion.innerText = "Region: ";
    const pRegion = document.createElement("p");
    pRegion.innerText = country.region;
    liRegion.append(spanRegion);
    liRegion.append(pRegion);
    
    const liCapital = document.createElement("li");
    const spanCapital = document.createElement("span");
    spanCapital.innerText = "Capital: ";
    const pCapital = document.createElement("p");
    pCapital.innerText = country.capital;
    liCapital.append(spanCapital);
    liCapital.append(pCapital);

    const ulMoreInfo = document.createElement("ul")
    ulMoreInfo.classList.add('country-information-more-information','display-none')
     const liNativeName = document.createElement("li");
     let officialNativeName = '';

    for (const lang in country.nativeName) {
      if (country.nativeName[lang].official) {
        officialNativeName = country.nativeName[lang].official;
        break; // Sort de la boucle dès qu'une langue avec une propriété "official" est trouvée.
      }
    }

    liNativeName.innerText = `Native Name : ${officialNativeName}`;
    
     const liSubRegion = document.createElement("li");
     liSubRegion.innerText = `Sub Region : ${country.subRegion}`;
     
     const domain = document.createElement("li");
     domain.innerText = `Top Level Domain : ${country.lvlDomain}`;
     
     const currencies = document.createElement("li");
      let currenciesName = [];

     for ( const crc in country.currencies){ 
        if(country.currencies[crc].name){
          currenciesName.push(country.currencies[crc].name)
        }
     }
     currencies.innerText = `Currencies : ${currenciesName} `;


    const languages = document.createElement("li");
    let languagesList = [];

    for ( const lg in country.languages){ 
       if(country.languages[lg]){
         languagesList.push(country.languages[lg])
       }
    }
    languages.innerText =`Languages : ${languagesList} `;

    const divBorderCountries = document.createElement('div') 
    divBorderCountries.classList.add("country-card-border-countries","display-none")
    const titleBorderCountries = document.createElement('h2');
    titleBorderCountries.innerText = "Border Countries"
    const ulBorderCountries = document.createElement("ul"); 
    const liBorderCountries = document.createElement("li")
    console.log(country);
    liBorderCountries.innerText = country.borderCountries;
   

    ulBorderCountries.append(liBorderCountries)
    divBorderCountries.append(titleBorderCountries)
    divBorderCountries.append(ulBorderCountries)

    ulMoreInfo.append(liNativeName);
    ulMoreInfo.append(liSubRegion);
    ulMoreInfo.append(domain);
    ulMoreInfo.append(currencies);
    ulMoreInfo.append(languages);
    

    ul.append(liPopulation);
    ul.append(liRegion);
    ul.append(liCapital);

    card.append(flag);
    divInformation.append(title);
    divInformation.append(ul);
    divInformation.append(ulMoreInfo)
    divInformation.append(divBorderCountries)
    card.append(divInformation);
    grid_countries.append(card);
  });
  addListenerToCard();
}
