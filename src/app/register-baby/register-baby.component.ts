import { Component, OnInit, OnDestroy } from '@angular/core';
import { Baby } from '../home/entities/baby';
import { FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { PasswordValidator } from '../PasswordValidator';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  private isBaby: boolean;
  registerForm: FormGroup;
  babies: Baby[];

  areas = [
    { value: 'København K' },
    { value: 'København N' },
    { value: 'København NV' },
    { value: 'København V' },
    { value: 'København Ø' },
    { value: 'København S' },
    { value: 'København SV' }
  ];
  constructor(private fb: FormBuilder, private data: DataService, private router: Router,
    private usersService: UsersService, public usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) { }

  onSubmit(registerForm) {
    console.log(registerForm.value)
    if (registerForm.valid) {
      // Send an http request to register
      // Save data to database
      let baby: Baby = registerForm.value as Baby;
      this.usersActions.createBaby(baby);
      /*this.usersService.createBaby(baby).subscribe(result => {
        console.log("from API:", result);
      });*/
      //this.data.addBaby(baby)
      // Navigate to the login page 
      this.router.navigate(['/login']);
    }
    else {
      // Display an error message

    }
  }
  //this.users = this.data.users;

  ngOnInit() {

    //i dont quite get thism, now I do
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.isBaby = users.isBaby;
      console.log(this.isBaby);
    });

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.email,]],
      birthdate: ['', Validators.required],
      area: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        PasswordValidator.getPasswordValidator()
      ]
      )]
    });

  }
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }

}

