import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes' //URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
              .toPromise()
              .then(res => res.json().data as Hero[])
              .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`

    return this.http.get(url)
              .toPromise()
              .then(res => res.json().data as Hero)
              .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`

    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
              .toPromise()
              .then(() => hero)
              .catch(this.handleError);
  }

  create(heroName: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: heroName}), {headers: this.headers})
              .toPromise()
              .then(res => res.json().data as Hero)
              .catch(this.handleError);
  }

  delete(heroId: number): Promise<any> {
    const url = `${this.heroesUrl}/${heroId}`

    return this.http.delete(url, {headers: this.headers})
              .toPromise()
              .catch(this.handleError);
  }
  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  handleError(error: any): Promise<any> {
    console.error('an error occured', error);
    return Promise.reject(error.message || error);
  }
}