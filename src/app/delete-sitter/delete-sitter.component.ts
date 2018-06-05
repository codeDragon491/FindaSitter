import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sitter } from '../home/entities/sitter';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { UsersActions } from '../users.actions';

@Component({
  selector: 'app-delete-sitter',
  templateUrl: './delete-sitter.component.html',
  styleUrls: ['./delete-sitter.component.scss']
})

export class DeleteSitterComponent implements OnInit {
  subscription: Subscription;
  sitter: Sitter;

  constructor(private ngRedux: NgRedux<IAppState>, private usersActions: UsersActions, public dialogRef: MatDialogRef<DeleteSitterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteSitter() {
    let sitter: Sitter = this.sitter as Sitter;
    this.usersActions.deleteSitter(sitter);
  }
  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.sitter = users.sitters.find(x => x._id === this.data.id);
    });
  }

}