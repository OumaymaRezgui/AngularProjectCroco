import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Déclaration des variables globales
  x : any;
  constructor() {}

  ngOnInit(): void {
  }
    //Déclaration d'une fonction
    somme(a,b){
      //Déclaration des variables locales
      let x : any;
    }
}
