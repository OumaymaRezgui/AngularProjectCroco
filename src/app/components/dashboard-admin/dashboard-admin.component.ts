import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  users : any;
  plats : any;
  newPlats : any;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("users") || "[]")
    this.plats = JSON.parse(localStorage.getItem("plats") || "[]")
  }

  deleteUser(id,role){
    console.log("id",id);
   let pos;

   for (let i = 0; i< this.users.length; i++) {
      if (this.users[i].id == id){
        pos = i;
      }
    }
    this.users.splice(pos,1)
    if(role == "chef"){
      let newPlats = [];
      for (let i = 0 ; i < this.plats.length; i++) {
        if(this.plats[i].idChef != id){
          newPlats.push(this.plats[i]);
        }
        
      }
      localStorage.setItem("plats",JSON.stringify(newPlats))
    }

    localStorage.setItem("users",JSON.stringify(this.users))
  }

  editUser(id,role){
    if(role == "chef"){
      this.router.navigate([`editChef/${id}`])
    }else{
      this.router.navigate([`editUser/${id}`])

    }
  }

  getcolor(speciality){
    switch (speciality) {
      case 'TN':
        return "red";
      break;
      case 'FR':
        return "blue";
      break;
      case 'IT':
        return "blue";
      break;
      default:
        break;
    }
  }

}