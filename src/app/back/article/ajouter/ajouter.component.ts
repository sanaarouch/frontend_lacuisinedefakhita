import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { ArticleFictifService } from 'src/app/service/article-fictif.service';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  articles;
  private  url:string ="https://fierce-inlet-90146.herokuapp.com/articles";// url d'héroku(serveur) qui appel tous les articles

  constructor(private service: ArticleFictifService, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response : Response) => {
      this.articles = response ;
    });
  }
  onSubmit(f:NgForm)
  {
   console.log(f.value);
    const article = f.value;

    this.http.post(this.url,(article))
      .subscribe((response : Response) => {
        // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
        console.log(response);
        article["_id"] = response['_id']
        console.log(article);
        this.articles.splice(0,0,article) ;
      })
      f.reset();
  }
}


