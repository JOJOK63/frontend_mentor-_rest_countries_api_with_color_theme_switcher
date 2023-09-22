export class Country {
  constructor(
    flag,
    flagAlt,
    name,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    lvlDomain,
    currencies,
    languages,
    borders,
    altSpellings,
    cca
  ) {
    this.flag = flag;
    this.flagAlt = flagAlt;
    this.name = name;
    this.nativeName = nativeName;
    this.population = population;
    this.region = region;
    this.subRegion = subRegion;
    this.capital = capital;
    this.lvlDomain = lvlDomain;
    this.currencies = currencies;
    this.languages = languages;
    this.borderCountries = borders;
    this.altSpellings = altSpellings;
    this.cca = cca;
  }
}
