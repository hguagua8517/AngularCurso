import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl:'Heroe.Component.html' ,
})

export class HeroeComponent{
 heroe: string = "Pantera Negra";
 edad : string = "30";

 get nombreCapitalizado() {
  return this.heroe.toUpperCase();
 }

 obtenerNombre(){
  return `${this.heroe} - ${this.edad}`;
 }

 cambiarNombre(): void{
  this.heroe = 'Gambito'; 
 }

 cambiarEdad(): void {
  this.edad = "40";
 }
}