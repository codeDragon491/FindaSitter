import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/************************************************************************ */
import { AuthGuardService } from './auth-guard.service';
/************************************************************************ */
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { FindSitterComponent } from './find-sitter/find-sitter.component';
import { FindFamilyComponent } from './find-family/find-family.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SitterDetailComponent } from './sitter-detail/sitter-detail.component';
import { EditFamilyComponent } from './edit-family/edit-family.component';
import { DeleteSitterComponent } from './delete-sitter/delete-sitter.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { RateSitterComponent } from './rate-sitter/rate-sitter.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

/************************************************************************ */

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [{ path: 'about', component: AboutComponent }, { path: 'contact', component: ContactComponent }] },
  { path: 'find-sitter', component: FindSitterComponent, canActivate: [AuthGuardService] },
  { path: 'sitter-detail/:id', component: SitterDetailComponent, canActivate: [AuthGuardService] },
  { path: 'delete-sitter', component: DeleteSitterComponent, canActivate: [AuthGuardService] },
  { path: 'rate-sitter', component: RateSitterComponent, canActivate: [AuthGuardService] },
  { path: 'find-family', component: FindFamilyComponent, canActivate: [AuthGuardService] },
  { path: 'family-detail/:id', component: FamilyDetailComponent, canActivate: [AuthGuardService] },
  { path: 'edit-family/:id', component: EditFamilyComponent, canActivate: [AuthGuardService] },
  { path: 'register-sitter', component: RegisterSitterComponent },
  { path: 'register-baby', component: RegisterBabyComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

/************************************************************************ */

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
