import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

//tomar parametro por url
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  heroes: any = [];
  termino: string;

  constructor( private _activateRoute: ActivatedRoute, 
               private _heroeService: HeroesService) {

    this._activateRoute.params.subscribe(params => {

      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroe( params['termino']);

      
    });
   }

}
