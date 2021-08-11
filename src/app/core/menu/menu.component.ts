import { MenuItem } from './../../model/menu-item.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem("User", "/user-list", "User List"),
      new MenuItem("Movie", "/movie-list", "Movie List"),
      new MenuItem("Actor", "/actor-list", "Actor List"),
      new MenuItem("Credit", "/credit-list", "Credit List"),
      new MenuItem("Login", "/user-login", "User Login")
    ];
  }

}
