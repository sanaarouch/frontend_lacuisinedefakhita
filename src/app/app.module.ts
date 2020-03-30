import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { ArticleComponent } from './front/article/article.component';

import { AccueilComponent } from './front/accueil/accueil.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { ArticleFictifService } from "./service/article-fictif.service";
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { FormContactComponent } from './front/form-contact/form-contact.component';
import { ListeUserComponent } from './back/gestion/liste/liste-user.component';

import { ParametreComponent } from './back/parametre/parametre.component';
import { AjouterUserComponent } from './back/gestion/ajouter/ajouter-user.component';
import { CommentaireFictifService } from './service/commentaire-fictif.service';
import { UserFictifService } from './service/user-fictif.service';
import { ModifierComponent } from './back/article/modifier/modifier.component';
import { LoginFormComponent } from './front/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticleComponent,
   FormContactComponent,
    AccueilComponent,
    NotFoundComponent,
    DashboardComponent,
    MenuDashboardComponent,
    AjouterComponent,
    ListeComponent,
    ListeUserComponent,
    ParametreComponent,
    AjouterUserComponent,
    ModifierComponent,
    LoginFormComponent,
    

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},
        { path : "article/:id" , component : ArticleComponent} ,
        { path : "contact" , component : FormContactComponent} ,
        { path : "login-form" , component : LoginFormComponent} ,
        { path : "admin/article/liste" , component : ListeComponent },
        { path : "admin/article/ajouter" , component : AjouterComponent },
        { path : "modifier/:id" , component : ModifierComponent },
        { path :  "admin/gestion/liste" , component : ListeUserComponent },
        { path :  "admin/gestion/ajouter" , component : AjouterUserComponent },
        { path :  "admin/parametre" , component : ParametreComponent },
        { path : "admin" , component : DashboardComponent }, // admin après admin/article/liste
        { path : "**", component : NotFoundComponent} // not fond toujours à la fin 
      ]
    ),
    HttpClientModule,
    FormsModule
 
  ],
  providers: [
  ArticleFictifService,//tous les services
  UserFictifService,
  CommentaireFictifService

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
