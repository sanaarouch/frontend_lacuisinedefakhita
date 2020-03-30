import { Component, OnInit } from '@angular/core';
import {ArticleFictifService} from "../../service/article-fictif.service"

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  articles ;//plusieurs articles

  constructor(private service : ArticleFictifService) {
   }

  ngOnInit(): void {

    this.service.getAllArticles() //le service récupère tout les articles
      .subscribe( (response : Response) => {
        this.articles = response;
        console.log(this.articles)// il affiche tout les articles de la base de donnée
      })
  }

}