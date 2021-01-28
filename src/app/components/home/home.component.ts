import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera: any[];
  populares: any[];
  popularesnenes: any[];
  constructor( private peliculas: PeliculasService ) {
    this.peliculas.peliculasCartelera().subscribe( peliscartelera => {
      this.cartelera = peliscartelera;
    } );
    this.peliculas.getPopulares().subscribe( peliscartelera => {
      this.populares = peliscartelera;
    } );
    this.peliculas.getPopularesnenes().subscribe( peliscarteleranenes => {
      this.popularesnenes = peliscarteleranenes;
     } );
   }

  ngOnInit(): void {
  }

}
