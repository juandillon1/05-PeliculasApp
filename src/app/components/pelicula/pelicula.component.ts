import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  regresara = '';
  busqueda = '';
  constructor( public peliculas: PeliculasService, public route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      this.regresara = params.pag;
      if ( params.busqueda ) {
        this.busqueda = params.busqueda;
      }
      peliculas.getpelicula( params.id )
               .subscribe( pelicula => {
                console.log(pelicula);
                this.pelicula = pelicula;
               } );
    } );
   }

  ngOnInit(): void {
  }

}
