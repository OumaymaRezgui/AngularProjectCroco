import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  addPlatForm : FormGroup;
  plat : any = {};
  constructor(private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit(): void {
    this.addPlatForm = this.formBuilder.group({
      platName : [''],
      price : [],
      description : [''],
    })
  }
  addPlat(){
    console.log(this.plat)
    let idPlat = JSON.parse(localStorage.getItem("idPlat") || "1")
    this.plat.id = idPlat
    let findedUser = JSON.parse(localStorage.getItem("connectedUser"))
    console.log("findedUser",findedUser);
    this.plat.idChef = findedUser.id;
    let plats = JSON.parse(localStorage.getItem("plats") || "[]")
    plats.push(this.plat)
    localStorage.setItem("plats",JSON.stringify(plats))
    localStorage.setItem("idPlat",idPlat + 1)
    this.router.navigate(['dashboardChef'])
  }
}