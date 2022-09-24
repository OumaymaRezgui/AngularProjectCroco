import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  addChefForm : FormGroup;
  chef : any = {};
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.addChefForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      speciality : [''],
      experience : [''],
      date : [''],
    })
  }
    addChef(){
      console.log(this.chef)
      let idChef = JSON.parse(localStorage.getItem("idChef") || "1")
      let chefs = JSON.parse(localStorage.getItem("chefs") || "[]")
      this.chef.id = idChef
      this.chef.role = "chef"
      chefs.push(this.chef)
      localStorage.setItem("chefs",JSON.stringify(chefs))
      localStorage.setItem("idChef",idChef + 1)
    }
  }