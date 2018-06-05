import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../PasswordValidator';
import { AdminValidator } from '../AdminValidator';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs/Subscription';
//import { User } from '../home/entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',]
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  private userType: string;
  loginForm: FormGroup;
  //users: User[];

  // loginForm = new FormGroup ({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });
  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService, private data: DataService,
    private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) {
  }

  onSubmit(loginForm) {
    console.log("is Valid?: " + loginForm.valid);

    if (loginForm.valid) {
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you navigate to the path the user tried to go to instead of
        // always the contact?
        //this.users = this.data.users;
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        this.router.navigate([redirect]);
      })
      if (localStorage.getItem('role') === 'admin') {
        this.usersActions.setAuthType('admin')
      } else {
        this.usersActions.setAuthType('user');
      }
    } else {
      // Display error messages.
    }
  }
  // KEEPS THE SESSION when reload

  ngOnInit() {

    /*this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.authType = users.authType;
      console.log(this.authType);
    });*/

    this.loginForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.email,
        AdminValidator.getAdminValidator()
      ])],
      password: ['',
        Validators.compose([
          Validators.required,
          PasswordValidator.getPasswordValidator()
        ]
        )]
    });

  }
  /*ngOnDestroy(): void {
   // Always unsubscribe on destroy.
   this.subscription.unsubscribe();
 }*/

}

