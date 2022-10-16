import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatserviceService {
   //adresse de base
   SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private HttpClient : HttpClient) {}
   public getAllPlats(){ 
     return this.HttpClient.get(this.SERVER_URL + 'plats');
   }
   public getPlat(platId){
       return this.HttpClient.get(`${this.SERVER_URL + 'plats'}/${platId}`); 
   }
   public createPlat(plat){
     return this.HttpClient.post(`${this.SERVER_URL + 'plats'}`, plat)
   }
   public deletePlat(platId){
     return this.HttpClient.delete(`${this.SERVER_URL + 'plats'}/${platId}`)
   }
   public updatePlat(plat){
     return this.HttpClient.put(`${this.SERVER_URL + 'plats'}/${plat.id}`, plat)
   }
}