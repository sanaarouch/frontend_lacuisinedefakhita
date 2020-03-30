import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentaireFictifService {
  id="_id";//déclaration id
  url = "https://fierce-inlet-90146.herokuapp.com/commentaires";//url permet de récupéré tous les commentaires

  constructor(private http : HttpClient) { }

  getAllCommentaires()//tous les commentaires
  {
    return this.http.get(this.url);//récupère tout les commentaires  grâce à l'url
  }
  getCommentaireById(id)//un ou des commentaires par id
  {
    return this.http.get(this.url+"/"+id);//retourne l url + l id correspondant de chaque commentaire
  }
  
}
