import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 actifUser:User=new User();
  profilUser: User=new User();
  connect: boolean;
  constructor(private httpClient: Http) {}

  public addUser(form){
    return this.httpClient.post("http://localhost:8181/addUser",form);
  }

  public getUsers(){
    return this.httpClient.get("http://localhost:8181/users");
  }

  public getOtherUsers(user){
    return this.httpClient.get("http://localhost:8181/OtherUsers/"+user);
  }

  getActiveUser(){
    return this.actifUser;
  }

  public getprofilUser() {
    return this.profilUser
  }
  public setprofilUser(user: User) {
    this.profilUser = user;

  }

  public getConnect(){
    return this.connect
  }
  public setConnect(val:boolean){
    this.connect=val;
  }

  public getActifUser() {
    return this.actifUser
  }
  public setActifUser(user: User) {
    this.actifUser = user;

  }

  
}
