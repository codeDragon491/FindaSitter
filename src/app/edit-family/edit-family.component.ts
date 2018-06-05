import { Component, OnInit } from '@angular/core';
import { Baby } from '../home/entities/baby';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { UsersActions } from '../users.actions';
import { UsersService } from '../users.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-family',
  templateUrl: './edit-family.component.html',
  styleUrls: ['./edit-family.component.scss']
})
export class EditFamilyComponent implements OnInit {
  updateBabyForm: FormGroup;
  subscription: Subscription;
  baby: Baby;
  id: String = this.route.snapshot.params.id;
  //@Input() babyInput: Baby;
  //@Output() babyClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute, private router: Router, private data: DataService, private usersService: UsersService, private authService: AuthService,
    private usersActions: UsersActions) { }
  onSubmit(updateBabyForm) {
    // Send an http request to update
    // Save data to database
    let baby: Baby = updateBabyForm.value as Baby;
    baby._id = this.id
    console.log(updateBabyForm.value)
    this.usersActions.updateBaby(baby);
    /*this.usersService.updateBaby(baby).subscribe(result => {
      console.log("from ws", result);
    });*/
    //this.data.updateBaby(baby)
    // Navigate to where?
    this.router.navigate(['find-family']);
  }

  ngOnInit(): void {

    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.baby = users.babies.find(x => x._id === this.id);
    });
    //this.baby = this.data.getBaby(this.id);
    //console.log(this.baby);
    this.updateBabyForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      birthdate: [''],
      area: [''],
      rating: ['']
    })
  }
  /*onBabyClick(baby: Baby) {
    this.babyClicked.emit(baby);
  }*/
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }
}


