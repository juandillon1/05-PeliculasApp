import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
// tslint:disable-next-line: import-blacklist
import { map } from 'rxjs/operators';
import {  HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = 'a4a17187e6138f6befa065796580f6b7';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];
  // tslint:disable-next-line: deprecation
  constructor( private http: HttpClient ) { }

  getPopulares() {
    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apiKey}&language=ES&certification.lte=GP&sort_by=popularity.desc`;
    return this.http.get(url).pipe(map( (res: any) =>  res.results ));
  }
  getPopularesnenes() {
    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apiKey}&certification_country=ES&language=ES&certification.lte=APTA&sort_by=popularity.desc&include_adult=false`;
    return this.http.get(url).pipe(map( (res: any) =>  res.results ));
  }
  buscarPelicula( texto: string ) {
    const url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&query=${ texto }&sort_by=popularity.desc&language=ES`;
    return this.http.get(url).pipe(map( (res: any) =>  {
      this.peliculas = res.results;
      return res.results;
    } ));
  }
  peliculasCartelera() {
    const desde: Date = new Date();
    desde.setDate(desde.getDate() - 15);
    const hasta: Date = new Date();

    const desdeformatted = formatDate(desde, 'yyyy-MM-dd', 'en-US');
    const hastaformatted = formatDate(hasta, 'yyyy-MM-dd', 'en-US');

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&primary_release_date.gte=${desdeformatted}&primary_release_date.lte=${hastaformatted}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res.results));
  }
  getpelicula( id: number ) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(map((res: any) => res));
  }
}
