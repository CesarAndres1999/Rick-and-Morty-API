import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { InfoPersonaje, Personaje } from '../PersonajeModel/PersonajeModel.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
//clase que funcionara para inyectar las funciones  al compomentes que necesite realizar uso de ellos 
export class ServicioService {
  //se agrega el Performs HTTP requests para realizar el llamado a la api 
  constructor(private http: HttpClient) { }

  
  //metodo para realizar la consulta de todos los personajes 
  getPersoanjes(): Observable<InfoPersonaje> {
    return this.http.get<InfoPersonaje>('https://rickandmortyapi.com/api/character');
  }

  //metodo para realizar la consulta de un personajes especifico
  getIndPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>('https://rickandmortyapi.com/api/character/' + id);
  }

}
