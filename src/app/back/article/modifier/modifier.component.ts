import { Component, OnInit } from '@angular/core';
import { ArticleFictifService } from '../../../service/article-fictif.service';


@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  article;
  id="_id" ;
 url = "https://fierce-inlet-90146.herokuapp.com/articles/id"//url qui ramène chaque articles par rapports à son id
  
constructor(private service: ArticleFictifService) { }
ngOnInit(): void {
  this.service.getAllArticles()
      .subscribe( (response : Response) => {
        this.article = response;//affichage de l'article
      })

  }

}
