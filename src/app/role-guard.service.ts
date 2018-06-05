import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        // this will be passed from the route config
        // on the data property
        //const expectedRole = route.data.expectedRole;

        const role = localStorage.getItem('role');

        if (this.authService.isLoggedIn && role == 'admin') {
            this.router.navigate(['home']);
            return false;
        }
    }
}
