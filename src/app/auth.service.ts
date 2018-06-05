import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLoggedIn = false;
    isAdmin = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): Observable<boolean> {

        // dummy implementation to set the user to be logged in.
        console.log("login called");
        return Observable.of(true).delay(1000).do(val => {
            console.log("changed it to true");
            this.isLoggedIn = true;
            if (localStorage.getItem('role') == 'admin') {
                this.isAdmin = true;

            }
        });
    }

    logout(): void {
        this.isLoggedIn = false;
        this.isAdmin = false;
    }
}