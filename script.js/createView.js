const grid_countries = document.querySelector(".js-grid-countries");

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

    //    const liNativeName = document.createElement("li");
    //   liNativeName.innerText = country.nativeName.ara.official;

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
    /**
    const liSubRegion = document.createElement("li");
    liSubRegion.innerText = country.subRegion;

    const domain = document.createElement("li");
    domain.innerText = country.lvlDomain;

    const currencies = document.createElement("li");
    currencies.innerText = country.currencies;

    const languages = document.createElement("li");
    languages.innerText = country.languages;

    //a ul.append(liNativeName);
    ul.append(liSubRegion);
    ul.append(domain);
    ul.append(currencies);
    ul.append(languages);
    */
    ul.append(liPopulation);
    ul.append(liRegion);
    ul.append(liCapital);

    card.append(flag);
    divInformation.append(title);
    divInformation.append(ul);
    card.append(divInformation);
    grid_countries.append(card);
  });
}
