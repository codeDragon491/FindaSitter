import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sitter } from '../home/entities/sitter';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { UsersActions } from '../users.actions';

@Component({
  selector: 'app-rate-sitter',
  templateUrl: './rate-sitter.component.html',
  styleUrls: ['./rate-sitter.component.scss']
})
export class RateSitterComponent implements OnInit {
  subscription: Subscription;
  sitter: Sitter;
  currentRate = 0;

  constructor(private ngRedux: NgRedux<IAppState>, private usersActions: UsersActions, public dialogRef: MatDialogRef<RateSitterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { } // use @Inject for singletons

  onNoClick(): void {
    this.dialogRef.close();
  }
  rateSitter(filledStars) {
    let rating = filledStars;
    let sitter: Sitter = this.sitter as Sitter;
    this.usersActions.rateSitter(sitter, rating)
  }
  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.sitter = users.sitters.find(x => x._id === this.data.id);
    });
  }

}