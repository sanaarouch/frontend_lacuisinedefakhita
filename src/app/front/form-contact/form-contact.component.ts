import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  success = false ;
  email_input ;
  commentaire_input ;
  constructor() { }
  ngOnInit(): void {
  }
  // cette méthode va être déclenchée quand l'internaute va cliquer que le bouton submit "envoyer du formulaire"
  // f => correspond à l'ensemble de champs du formulaire 
  // donc dans f on va retouver les champs commentaires et le champ email
  demandeContact(f){
    if(f.valid){
      // afficher dans la console // ou un enregistrement en bdd 
      console.log(f.value)
      // afficher un bandeau tout est ok 
      this.success = true;
      f.resetForm();
      //this.email_input = "";
      //this.commentaire_input = "";
      // vider les champs du formulaire

      
    }
   
  }

}
