import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserFictifService {
  id="_id";//déclaration id
  url = "https://fierce-inlet-90146.herokuapp.com/utilisateurs";//url permet de récupéré tous les utilisateurs

  constructor( private http: HttpClient) { }
  getAllUsers()//tous les utilisateurs
  {
    return this.http.get(this.url);//récupère tout les utilisateurs grâce à l'url
  }

  getUserById(id)//un utilisateur par id
  {
    return this.http.get(this.url+"/"+id);//retourne l url + l id correspondant de chaque utilisateur
  }
  
}
  

