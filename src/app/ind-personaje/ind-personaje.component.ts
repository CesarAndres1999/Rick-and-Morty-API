import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoPersonaje, Personaje } from '../PersonajeModel/PersonajeModel.module';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-ind-personaje',
  templateUrl: './ind-personaje.component.html',
  styleUrls: ['./ind-personaje.component.css']
})
export class IndPersonajeComponent implements OnInit {
  //se importa el servicio para utilizar los metodos para llmar los datos de la api, como tambien se ingresa 
  //como las rutas para hacer uso en la navegacion entre paginas
  constructor(private router: Router, private routerA: ActivatedRoute, private servicio: ServicioService) { }
  //variables a utilizar 
  indice: number;
  character: Personaje;
  //metodo para volver a la pagina principal 
  volverHome() {
    this.router.navigate([""]);
  }
  //al llegar el parametro que le pasamos  por medio de la url lo guardamos para ralizar las consultas y asi crear el objecto 
  //para hacer uso de las propiedades dentro de la pagina
  ngOnInit(): void {
    this.indice = this.routerA.snapshot.params['id'];

    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.id = Response.id);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.name = Response.name);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.status = Response.status);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.species = Response.species);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.type = Response.type);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.gender = Response.gender);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.image = Response.image);
    this.servicio.getIndPersonaje(this.indice).subscribe(Response => this.url = Response.url);
    this.character = new Personaje(this.id, this.name, this.status, this.species, this.type, this.gender, this.image, this.url, this.created);

  }
  //creacion de varibles a utilizar para guardar datos 
  id: number = 0;
  name: string;
  status: String;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  created: string;

}
