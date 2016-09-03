import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Navbar} from './components/navbar/navbar.component';
import { Header } from './components/header/header.component';

@Component({
  selector: 'reese-admin',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES, Navbar, Header],
  templateUrl: 'app/reese-admin.html',
  //template: '<div><header></header>Hello World!!!!!!!!<navbar></navbar></div>'
})
export class ReeseApp {

  constructor() {}

}
