import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
    }
  agregar(){
    //event.preventDefault();
    console.log(this.nuevo);
  }
  cambiarNombre( event: any){
    console.log(event.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
