import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
  
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
