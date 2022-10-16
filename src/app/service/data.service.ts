import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() {}
  createDb(){

    let  users =  [
      {  id:  1,  firstName:  'oumayma', lastName: "rezgui", email: "rezguioumayma@gmail.com", password : "12345", role: "admin", tel : "58704203"},
      {  id:  2,  firstName:  'chef', lastName: "benchef", email: "chefbech@gmail.com", password : "12345", role: "chef", speciality : "pasta", experience : "2" , date : "24/12/95",},
      {  id:  3,  firstName:  'administrateur', lastName: "root", email: "root@gmail.com", password : "12345", role: "client", tel : "58704203"}
    ];
 
    return {users};
 
   }
}
