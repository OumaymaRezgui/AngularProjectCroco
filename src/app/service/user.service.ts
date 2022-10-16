import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //adresse de base
  SERVER_URL: string = "http://localhost:3000/api/";
  constructor(private HttpClient : HttpClient) {}
  public getUsers(){ 
    return this.HttpClient.get<{users : any}>(this.SERVER_URL + 'users');
  }

  public getUser(userId){
      return this.HttpClient.get<{user : any}>(`${this.SERVER_URL + 'users'}/${userId}`); 
  }
  
  public createUser(user){
    return this.HttpClient.post<{message : any}>(`${this.SERVER_URL + 'users'}`, user)
  }

  public deleteUser(userID){
    return this.HttpClient.delete<{message : any}>(`${this.SERVER_URL + 'users'}/${userID}`)
  }
  public updateUser(user){
    return this.HttpClient.put<{message : any}>(`${this.SERVER_URL + 'users'}/${user._id}`, user)
  }
}
