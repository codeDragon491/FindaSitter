// import
import { Component, OnInit } from '@angular/core';
import { UsersActions } from './users.actions';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // you can write inline HTML here within backticks
  styleUrls: ['./app.component.scss']  // and css here
})
export class AppComponent implements OnInit {
  signupIsActive: boolean;
  loginIsActive: boolean;
  title = 'FindaSitter';

  constructor(private usersActions: UsersActions) { }

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

  ngOnInit(): void {
    this.usersActions.getBabies();
    this.usersActions.getSitters();
  }
 

}
