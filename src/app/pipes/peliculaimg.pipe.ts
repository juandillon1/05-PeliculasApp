import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaimg'
})
export class PeliculaimgPipe implements PipeTransform {

  transform(pelicula: any, poster = false): any {
    const url = 'http://image.tmdb.org/t/p/w400';

    if (poster) {
      return url + pelicula.poster_path;
    }

    if ( pelicula.poster_path ) {
      return url + pelicula.poster_path;
    } else {
      if ( pelicula.backdrop_path ) {
        return url + pelicula.backdrop_path;
      } else {
        return 'https://i.ibb.co/ZMF63gV/No-Image-Available.png';
      }
    }
  }

}
