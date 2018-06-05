import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Sitter } from '../home/entities/sitter';
import { Router } from '@angular/router';
import { DeleteSitterComponent } from '../delete-sitter/delete-sitter.component';
import { MatDialog } from '@angular/material';
import { UsersService } from '../users.service';
import { UsersActions } from '../users.actions';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { RateSitterComponent } from '../rate-sitter/rate-sitter.component';


@Component({
  selector: 'app-find-sitter',
  templateUrl: './find-sitter.component.html',
  styleUrls: ['./find-sitter.component.scss']
})
export class FindSitterComponent implements OnInit, OnDestroy {
  deleted: string;
  sitters: Sitter[];
  sitter: Sitter;
  subscription: Subscription;
  currentRate = 6;
  //selectedSitter: Sitter;
  constructor(private data: DataService, private authService: AuthService, private usersActions: UsersActions, private usersService: UsersService, public dialog: MatDialog, private router: Router, private ngRedux: NgRedux<IAppState>) {
  }

  openDeleteDialog(sitterId): void {
    let dialogRef = this.dialog.open(DeleteSitterComponent, {
      width: '300px',
      data: { id: sitterId }
    });
    dialogRef.afterClosed()
  }
  
  openRateDialog(sitterId): void {
    let dialogRef = this.dialog.open(RateSitterComponent, {
      width: '300px',
      data: { id: sitterId }
    });

  }
  /*onSelect(sitter: Sitter) {
    this.selectedSitter = sitter;
  }*/
  ngOnInit(): void {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      //console.log(users.sitters);
      this.sitters = users.sitters;
      console.log(this.sitters)
    });

    //this.sitters = this.data.sitters;
  }
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }

}
