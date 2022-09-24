import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title : String;
  source : any;
  constructor() { }

  ngOnInit(): void {
    this.title = "Hello"
    this.source = "assets/img/logo.png"
  }
clickMe(){
  alert("test")
}
}
