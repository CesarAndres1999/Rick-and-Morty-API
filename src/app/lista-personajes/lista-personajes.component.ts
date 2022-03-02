import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../PersonajeModel/PersonajeModel.module';

import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  //se prepara al componente hijo para resivir los parametros que el compomente padre le estara suministrando con @Input()
  @Input() personajeslista: Personaje;
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {

  }

}


