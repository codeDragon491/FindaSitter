import { Component, OnInit } from '@angular/core';
import { Sitter } from '../home/entities/sitter';
import { FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { PasswordValidator } from '../PasswordValidator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
//import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { UsersService } from '../users.service';
import { UsersActions } from '../users.actions';
//import { IAppState } from '../store/store';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {
  private isSitter: boolean;
  registerForm: FormGroup;
  invalid: boolean;
  gender: string;
  area: string;
  sitters: Sitter[];


  genders = [
    'female',
    'male'
  ];
  areas = [
    'København K',
    'København N',
    'København NV',
    'København V',
    'København Ø',
    'København S',
    'København SV',
  ];
  rates = [
    '125 DKK',
    '150 DKK',
    '200 DKK'
  ];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private data: DataService, private usersService: UsersService, private usersActions: UsersActions, private router: Router, private authService: AuthService, /*private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>*/) { }

  onSubmit(registerForm) {
    console.log(registerForm.value)
    this.invalid = true;
    if (registerForm.valid) {
      // Send an http request to register
      // Save data to database
      let sitter: Sitter = registerForm.value as Sitter;
      this.usersActions.createSitter(sitter);
      /*this.usersService.createSitter(sitter).subscribe(result => {
        console.log("from API:", result);
      });*/
      //this.data.addSitter(sitter)
      // Navigate to the login page 
      this.router.navigate(['/login']);

    }
    else {
      // Display an error message

    }
  }
  //this.users = this.data.users;

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [
        Validators.required,
        Validators.email,
      ]],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      area: ['', Validators.required],
      rate: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required, //Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,})')
        PasswordValidator.getPasswordValidator()
      ]
      )]
    });
    /*this.ngRedux.select(state => state.users).subscribe(res => {
      this.isRegistered = res.isRegistered;
    });*/

  }

}