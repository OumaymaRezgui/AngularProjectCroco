import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})

export class DashboardChefComponent implements OnInit {

  plats : any;
  platsOfchef : any = [];

  constructor() {}

  ngOnInit(): void {
    this.plats = JSON.parse(localStorage.getItem("plats") || "[]")
    let findedUser = JSON.parse(localStorage.getItem("connectedUser"))
    for (let i = 0; i < this.plats.length; i++) {
      if (findedUser.id == this.plats[i].idChef ){
        this.platsOfchef.push(this.plats[i]);
      }
    }
  }
}