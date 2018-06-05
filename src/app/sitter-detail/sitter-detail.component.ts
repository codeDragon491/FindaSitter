import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sitter } from '../home/entities/sitter';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.scss']
})
export class SitterDetailComponent implements OnInit {
  subscription: Subscription;
  id: String = this.route.snapshot.params.id;
  sitter: Sitter;
  constructor(private route: ActivatedRoute, private data: DataService, public authService: AuthService, private ngRedux: NgRedux<IAppState>) { }


  ngOnInit(): void {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.sitter = users.sitters.find(x => x._id === this.id);
      console.log(this.sitter);
    });
    //this.sitter = this.data.getSitter(this.id);
  }
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    this.subscription.unsubscribe();
  }
}
