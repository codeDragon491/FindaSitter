import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { User } from '../home/entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  //signupIsActive: boolean;
  //loginIsActive: boolean;

  constructor(public authService: AuthService, private router: Router) { }
  /*showLoginForm() {
    console.log("I have been clicked");
    this.loginIsActive = true;
    this.signupIsActive = false;
  }
  showSignupForm() {
    console.log("I have been clicked");
    this.signupIsActive = true;
    this.loginIsActive = false;
  }*/
  onLogout() {
    this.authService.logout();
    console.log("isLoggedIn " + this.authService.isLoggedIn);
    localStorage.clear();
    // Navigate to the login page 
    this.router.navigate(['/login']);
    return false;
  }
  ngOnInit() {

  }

}