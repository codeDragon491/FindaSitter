import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs/Subscription';
import { UsersActions } from '../users.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit /*, OnDestroy*/ {
  subscription: Subscription;
  message: string;
  private authType: string;
  constructor(public authService: AuthService, public router: Router, private ngRedux: NgRedux<IAppState>, private usersActions: UsersActions) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  /*logout() {
    this.authService.logout();
    this.setMessage();
  }*/
  ngOnInit(): void {
    // shows the result of state on the UI
    /*this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.authType = users.authType;
      console.log(this.authType);
    });*/
  }
  /*ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }*/

}
