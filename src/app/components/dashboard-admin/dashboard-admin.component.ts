import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  users : any;
  constructor() { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("users") || "[]")
  }


}
