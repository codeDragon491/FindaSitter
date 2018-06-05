import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Baby } from '../home/entities/baby';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.scss']
})
export class FamilyDetailComponent implements OnInit {
  id: String = this.route.snapshot.params.id;
  baby: Baby;
  subscription: Subscription;
  //@Input() babyInput: Baby;
  //@Output() babyClicked: EventEmitter<any>=new EventEmitter<any>();
  constructor(private route: ActivatedRoute, private data: DataService, private authService: AuthService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.baby = users.babies.find(x => x._id === this.id);
      console.log(this.baby);
    });
    //this.baby = this.data.getBaby(this.id);
  }
  /*onBabyClick(baby: Baby) {
    this.babyClicked.emit(baby);
  }*/
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }
}

