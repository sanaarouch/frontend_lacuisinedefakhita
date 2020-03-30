import { Component, OnInit } from '@angular/core';
import { UserFictifService} from 'src/app/service/user-fictif.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  
  utilisateurs;//déclaration de la variable de class
  constructor(private service : UserFictifService) { }//déclaration dans le constructeur du service userfictif

  ngOnInit(): void {
    this.service.getAllUsers()//on récupère tous les users
      .subscribe( (response : Response) => {
        this.utilisateurs = response;//affichage des users
      })
  }

}
