import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AuthenticationService } from '../../services/authentication.service';
import { User } from './../../models/user';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  currentUser:User;
  cheminImage:any ="./../../../assets/images/justech.png";
  userImage:any = "./../../../assets/dist/img/user2-160x160.jpg";
  constructor(private authenticationService: AuthenticationService,private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
