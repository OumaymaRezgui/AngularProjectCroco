import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})

export class DashboardChefComponent implements OnInit {

  plats : any;
  platsOfchef : any = [];

  constructor(private router : Router) {}

  ngOnInit(): void {
    this.plats = JSON.parse(localStorage.getItem("plats") || "[]")
    let findedUser = JSON.parse(localStorage.getItem("connectedUser"))
    for (let i = 0; i < this.plats.length; i++) {
      if (findedUser.id == this.plats[i].idChef ){
        this.platsOfchef.push(this.plats[i]);
      }
    }
  }

  deleteplat(id:any){
    let pos:any;
   for (let i = 0; i< this.plats.length; i++) {
      if (this.plats[i].id == id){
        pos = i;
      }
    }
    this.plats.splice(pos,1);
    localStorage.setItem("plats",JSON.stringify(this.plats));
  }

  editplat(id){
     if(id){
       this.router.navigate([`editPlat/${id}`]);
     }
  }
}