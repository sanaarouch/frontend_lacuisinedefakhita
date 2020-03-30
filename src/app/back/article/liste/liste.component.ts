import { Component, OnInit } from '@angular/core';
import { ArticleFictifService } from '../../../service/article-fictif.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  articles ;//déclaration d'une variable de classe articles
  constructor(private service : ArticleFictifService) { } //déclaration du service dans le constructeur

  ngOnInit(): void {
    this.service.getAllArticles()//permet de récupérer tous les articles
      .subscribe( (response : Response) => {
        this.articles = response;// affichage de tous les articles
      })
  }

}