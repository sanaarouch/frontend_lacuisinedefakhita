import { Component, OnInit } from '@angular/core';
import { ArticleFictifService } from 'src/app/service/article-fictif.service';
import { UserFictifService } from 'src/app/service/user-fictif.service';
import { CommentaireFictifService } from 'src/app/service/commentaire-fictif.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbrArticles;//déclaration des variables de class
  nbrUsers;
  nbrCommentaires;
  constructor(private article : ArticleFictifService,
    private users : UserFictifService, private commentaire : CommentaireFictifService) {}//déclaration dans le constructeur des services, articles fictif, userfictif,commentaire

ngOnInit(): void {
this.article.getAllArticles()//récupération de tous les articles
.subscribe( (response : Response) => {
this.nbrArticles = response;
console.log(this.nbrArticles)//affichage du nombre de tous les articles
})
this.users.getAllUsers()//récupération de tous les users
.subscribe( (response : Response) => {
this.nbrUsers = response;
console.log(this.nbrUsers)//affichage du nombre de tous les users
})
this.commentaire.getAllCommentaires()//récupération de tous les commentaires
.subscribe( (response : Response) => {
  this.nbrCommentaires = response;
  console.log(this.nbrCommentaires)//affichage du nombre de commentaire
})

}
}