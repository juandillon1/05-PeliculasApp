import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private peliculas: PeliculasService ) {
    //peliculas.getPopulares().subscribe( pelis => console.log(pelis) );
    //peliculas.buscarPelicula('wally').subscribe( pelis => console.log(pelis) );
  }
  title = 'PeliculasAPP';
}
