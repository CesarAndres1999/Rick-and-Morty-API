import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';

import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicioService } from './servicio/servicio.service';
import { IndPersonajeComponent } from './ind-personaje/ind-personaje.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'ind/:id',component:IndPersonajeComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaPersonajesComponent,
    HomeComponent,
    IndPersonajeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
