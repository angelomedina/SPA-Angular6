import { Component, OnInit } from '@angular/core';
import { Heroe,HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesServices: HeroesService,
    private _router:  Router) { 

  }

  ngOnInit() { 
  }

  buscarHeroe( termino: string ){

    this._router.navigate(['/busqueda',termino]);

  }
}
