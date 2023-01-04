export class Country {
  public name: string;
  public nativeName: string;
  public population: number;
  public region: string;
  public subRegion: string;
  public capital: string;
  public domain: string;
  public currency: string;
  public languages: [];
  public borderCountries: [];

  constructor(
    name: string,
    native: string,
    pop: number,
    region: string,
    sub: string,
    cap: string,
    domain: string,
    cur: string,
    lang: [],
    border: []
  ) {
    this.name = name;
    this.nativeName = native;
    this.population = pop;
    this.region = region;
    this.subRegion = sub;
    this.capital = cap;
    this.domain = domain;
    this.currency = cur;
    this.languages = lang;
    this.borderCountries = border;
  }
}
