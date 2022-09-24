import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  addAdminForm : FormGroup;
  user : any = {};
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.addAdminForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : [''],
    })
  }
  
  addAdmin(){
    console.log(this.user)
    let idUser = JSON.parse(localStorage.getItem("idUser") || "1")
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    this.user.id = idUser
    this.user.role = "admin"
    users.push(this.user)
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("idUser",idUser + 1)
  }
}