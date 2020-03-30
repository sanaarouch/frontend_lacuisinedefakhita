import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ArticleFictifService {

  id="_id";//déclaration id
  url = "https://fierce-inlet-90146.herokuapp.com/articles";//url permet de récupéré tous les articles

  constructor(private http : HttpClient) { }

  getAllArticles()//tous les articles
  {
    return this.http.get(this.url);//récupère tout les articles grâce à l'url
  }

  getArticleById(id)//un article par id
  {
    return this.http.get(this.url+"/"+id);//retourne l url + l id correspondant de chaque article
  }
  getAllCommentaires()//tous les commentaires
  {
    return this.http.get(this.url);//récupère tout les commentaires  grâce à l'url
  }

}


  
