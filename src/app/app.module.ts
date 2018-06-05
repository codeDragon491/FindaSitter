import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/************************************************************************ */
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { rootReducer } from './store/store';
import { IAppState } from './store/store';
import { UsersActions } from './users.actions';
import { UsersEpic } from './users.epic';
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createLogger } from 'redux-logger';

/************************************************************************ */
//import { MaterialModule } from './material.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

/************************************************************************ */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { LoginComponent } from './login/login.component';
import { FindSitterComponent } from './find-sitter/find-sitter.component';
import { FindFamilyComponent } from './find-family/find-family.component';
import { SitterDetailComponent } from './sitter-detail/sitter-detail.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { EditFamilyComponent } from './edit-family/edit-family.component';
import { DeleteSitterComponent } from './delete-sitter/delete-sitter.component';
import { RateSitterComponent } from './rate-sitter/rate-sitter.component';

/************************************************************************ */
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { DatePipe } from '@angular/common';
import { UsersService } from './users.service';
import { FilterSitters } from './sitters.filter';

/************************************************************************ */


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterSitterComponent,
    RegisterBabyComponent,
    PageNotFoundComponent,
    FindSitterComponent,
    FindFamilyComponent,
    FamilyDetailComponent,
    AboutComponent,
    SitterDetailComponent,
    EditFamilyComponent,
    DeleteSitterComponent,
    RegisterBabyComponent,
    RateSitterComponent,
    FilterSitters,
  ],

  entryComponents: [DeleteSitterComponent],

  imports: [
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    NgReduxModule, NgReduxRouterModule.forRoot()

  ],
  providers: [
    AuthGuardService,
    AuthService,
    DataService,
    DatePipe,
    UsersActions,
    UsersService,
    UsersEpic,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter, private usersEpic: UsersEpic) {

    //From app.module.ts - constructor
    const rootEpic = combineEpics(
      this.usersEpic.createSitter,
      this.usersEpic.createBaby,
      this.usersEpic.getSitters,
      this.usersEpic.getBabies,
      this.usersEpic.updateBaby,
      this.usersEpic.deleteSitter,
      this.usersEpic.rateSitter
      // Each epic is referenced here.
    );
    // Middleware
    // http://redux.js.org/docs/advanced/Middleware.html
    // https://github.com/angular-redux/store/blob/master/articles/epics.md
    // const epicMiddleware = createEpicMiddleware(rootEpic);
    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];

    this.ngRedux.configureStore(
      rootReducer,
      {}, middleware, [devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize();
  }
}