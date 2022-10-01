import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor() { }
  @Input() childDish : any;
  chefs : any;
  mychefs : any = [];
  firstName : any;
  lastName : any;
  ngOnInit(): void {
    this.chefs = JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < this.chefs.length; i++) {
      if(this.chefs.role ="chef"){
        this.mychefs.push(this.chefs[i]);
      }
    }
    console.log("mychefs",this.mychefs);
    console.log(this.childDish.idChef)

    for (let i = 0; i < this.mychefs.length; i++) {
      console.log("this.mychefs[i].id",this.mychefs[i].id)
      if(this.mychefs[i].id == this.childDish.idChef){
        console.log("hhhhhh",this.mychefs[i].firstName);
        console.log("hhhhhh",this.mychefs[i].lastName);
        this.firstName = this.mychefs[i].firstName;
        this.lastName  = this.mychefs[i].lastName;
      }
      
    }
    
  }

}
