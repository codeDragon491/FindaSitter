import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Baby } from '../home/entities/baby';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../store/store';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../users.service';
import { UsersActions } from '../users.actions';

@Component({
  selector: 'app-find-family',
  templateUrl: './find-family.component.html',
  styleUrls: ['./find-family.component.scss']
})
export class FindFamilyComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  babies: Baby[];
  constructor(private data: DataService, public authService: AuthService, private usersService: UsersService,
    private usersActions: UsersActions, private router: Router, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      //console.log(users.babies);
      this.babies = users.babies;
      console.log(this.babies)
    });
    //this.babies = this.data.babies;
  }
  /*onBabyClicked(baby) {
    console.log(baby);
  }*/
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }
}