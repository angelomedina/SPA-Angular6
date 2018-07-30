import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html'
})
export class HeroetarjetaComponent implements OnInit {

  // es un decorador que trae angular que le dice a la variable que puede venir desde afuera
  @Input() heroe: any = {};
  @Input() index: number;

  //es una propiedad de eventos que es necesario escuchar del padre y va a emitir algun tipo de dato
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router:  Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }


  ngOnInit() {
  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.index);
  }

}
