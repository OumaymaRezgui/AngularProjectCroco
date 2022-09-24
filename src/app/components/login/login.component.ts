import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  client : any = {};
  exists : boolean = true;
  constructor(private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : [''],
      password : [''],
    })
  }
  
  login(){
    let   findedUser;
    console.log(this.client)
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    for (let i = 0; i < users.length; i++) {
         if(users[i].email == this.client.email && users[i].password == this.client.password){
          findedUser = users[i];
          break;
         }    
    }
    if(findedUser){
      //user exist
      localStorage.setItem("connectedUser",JSON.stringify(findedUser));
     switch (findedUser.role) {
      case 'admin':
        this.router.navigate(["dashboardAdmin"]);
      break;
      case 'chef':
        this.router.navigate(["dashboardchef"]);
      break;
      case 'client':
        this.router.navigate([""]);
       break;
     }
    }else{
      //user not exist
      this.exists = false;
    }
  }

}
