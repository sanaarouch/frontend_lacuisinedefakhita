import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  bgColor = environment.bg;
  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu(menu)
  {
    menu.classList.toggle("collapse")//activation des bouttons du menu
  }

}