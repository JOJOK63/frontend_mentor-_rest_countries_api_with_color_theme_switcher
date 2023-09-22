const grid_countries = document.querySelector(".js-grid-countries");
import { addListenerToCard } from "./card-details";

export function createVueCountries(countries) {
  const allAbreviatonToName = [];

  countries.forEach((item) => {
    allAbreviatonToName[item.name] = item.cca;
  });

  console.log(allAbreviatonToName);
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

    const divHeaderInfo = document.createElement("div");
    divHeaderInfo.classList.add("country-header-info");
    divInformation.append(divHeaderInfo);

    const title = document.createElement("h1");
    title.classList.add("country-title");
    title.innerText = country.name;

    const ul = document.createElement("ul");

    const liPopulation = document.createElement("li");
    liPopulation.innerHTML = `<span>Population : </span> ${country.population}`;

    const liRegion = document.createElement("li");
    liRegion.innerHTML = `<span>Region : </span> ${country.region}`;

    const liCapital = document.createElement("li");
    liCapital.innerHTML = `<span>Capital : </span> ${country.capital}`;

    const liAlt = document.createElement("li");
    liAlt.innerHTML = `<span>Alt Speeling : </span> ${country.altSpellings}`;
    /////////////////////////////////////DIV MORE INFORMATION///////////////////////////////////////////
    const divMoreInfo = document.createElement("div");
    const ulMoreInfo = document.createElement("ul");
    divMoreInfo.classList.add(
      "country-information-more-information",
      "display-none"
    );
    const liNativeName = document.createElement("li");
    let officialNativeName = "";

    for (const lang in country.nativeName) {
      if (country.nativeName[lang].official) {
        officialNativeName = country.nativeName[lang].official;
        break; // Sort de la boucle dès qu'une langue avec une propriété "official" est trouvée.
      }
    }

    liNativeName.innerHTML = `<span>Native Name :</span> ${officialNativeName}`;

    const liSubRegion = document.createElement("li");
    liSubRegion.innerHTML = `<span>Sub Region : </span> ${country.subRegion}`;

    const domain = document.createElement("li");
    domain.innerHTML = `<span>Top Level Domain : </span> ${country.lvlDomain}`;

    const currencies = document.createElement("li");
    let currenciesName = [];

    for (const crc in country.currencies) {
      if (country.currencies[crc].name) {
        currenciesName.push(country.currencies[crc].name);
      }
    }
    currencies.innerHTML = `<span>Currencies : </span> ${currenciesName} `;

    const languages = document.createElement("li");
    let languagesList = [];

    for (const lg in country.languages) {
      if (country.languages[lg]) {
        languagesList.push(country.languages[lg]);
      }
    }
    languages.innerHTML = `<span>Languages : </span> ${languagesList} `;

    const divBorderCountries = document.createElement("div");
    divBorderCountries.classList.add(
      "country-card-border-countries",
      "display-none"
    );
    const titleBorderCountries = document.createElement("h2");
    titleBorderCountries.innerText = "Border Countries : ";
    const ulBorderCountries = document.createElement("ul");

    try {
      const borderC = country.borderCountries;
      borderC.forEach((element) => {
        const liBorderCountries = document.createElement("li");
        /** 
        console.log(element);
        console.log(allAbreviatonToName);
        const fullName = allAbreviatonToName[element];
        */
        liBorderCountries.innerText = element;
        ulBorderCountries.append(liBorderCountries);
      });
    } catch (error) {
      // Handle any errors that may occur
      console.error(error);
    }

    divBorderCountries.append(titleBorderCountries);
    divBorderCountries.append(ulBorderCountries);

    ulMoreInfo.append(liNativeName);
    ulMoreInfo.append(liSubRegion);
    ulMoreInfo.append(domain);
    ulMoreInfo.append(currencies);
    ulMoreInfo.append(languages);

    ul.append(liPopulation);
    ul.append(liRegion);
    ul.append(liCapital);
    ul.append(liAlt);

    card.append(flag);
    divMoreInfo.append(ulMoreInfo);
    divHeaderInfo.append(title);
    divHeaderInfo.append(ul);
    divInformation.append(divMoreInfo);
    divInformation.append(divBorderCountries);
    card.append(divInformation);
    grid_countries.append(card);
  });
  addListenerToCard();
}
