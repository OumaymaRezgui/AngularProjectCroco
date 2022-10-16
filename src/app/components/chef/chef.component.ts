import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  @Input() childChef : any;
  @Output() newChef = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteChef(id){
    let chefs = JSON.parse(localStorage.getItem("users") || "[]");
    let pos;
    for (let i = 0; i < chefs.length; i++) {
        if(chefs[i].id == id){
          pos = i;
        }      
    }
    chefs.splice(pos,1);
    localStorage.setItem("users",JSON.stringify(chefs));
    //déclenchement de l'event 
    this.newChef.emit(chefs);
  }
}
