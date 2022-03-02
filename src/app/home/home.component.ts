import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoPersonaje, Personaje } from '../PersonajeModel/PersonajeModel.module';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // varibale tipo InfoPersonaje que resive los datos 
  character: InfoPersonaje;


  constructor(private TomarPerosanjes: ServicioService) { }


  ngOnInit(): void {
    console.log('sacando datos');
    /*for (let index = 1; index < 10; index++) {
      this.TomarPerosanjes.getPersoanjes(index).subscribe(response => this.character=response);}
    */
   //se se llama un metodo que nos lo brinda el servicio para odtener los personajes
    this.TomarPerosanjes.getPersoanjes().subscribe(response => this.character = response);
    /*verificacion que si esta consumiendo api*/
    //this.TomarPerosanjes.getPersoanjes().subscribe(response => console.log(response));
  }


}
