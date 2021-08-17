import { SystemService } from 'src/app/service/system.service';
import { MenuItem } from './../../model/menu-item.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(
    private sysSvc: SystemService
  ) { }

  ngOnInit(): void {
    //Note:  'Logout' menu item dislpay assumes you have
    // checkLogin() function added on every component
    this.menuItems = [
      new MenuItem("User", "/user-list", "User List"),
      new MenuItem("Movie", "/movie-list", "Movie List"),
      new MenuItem("Actor", "/actor-list", "Actor List"),
      new MenuItem("Credit", "/credit-list", "Credit List"),
      new MenuItem("Logout", "/user-login", "User Login")
    ];

    //is user reviewer?  if so, add Review menu component

    // is user logged in?
    // displayStr = (if sysvsc.id == 0) ? "Login" : "Logout"
    // this.menuItems.push(new MenuItem(dislpayStr, "/user-login", "User Login"));

  }

}
