import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  addPlatForm : FormGroup;
  plat : any = {};
  plats: any;
  id: any;
  title : any;
  constructor(private formBuilder : FormBuilder , private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.addPlatForm = this.formBuilder.group({
      platName : [''],
      price : [],
      description : [''],
    })

    this.plats = JSON.parse(localStorage.getItem("plats") || '[]');
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title = "editPlat";
      for (let i = 0; i < this.plats.length; i++) {
        if(this.plats[i].id == this.id){
          this.plat = this.plats[i];
        } 
      }
    }else{
      this.title = "addPlat";
    }
  }


  savePlat(){
    if(this.id){
      //edit plat 
      for (let i = 0; i < this.plats.length; i++) {
        if(this.plats[i].id == this.id){
          this.plats[i] = this.plat;
          break;
        }
        
      }
      localStorage.setItem("plats",JSON.stringify(this.plats))
    }else{
      //add plat
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
    this.router.navigate(['dashboardChef']);
  }
}