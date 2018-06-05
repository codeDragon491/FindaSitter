import { Injectable } from "@angular/core";
import { UsersState } from "./store/store";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Baby } from "./home/entities/baby";
import { Sitter } from "./home/entities/sitter";




@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }


    getUsers() {
        return this.http.get('http://angular2api1.azurewebsites.net/api/internships/getall');
    }
    // do you need to update the whole baby ? 
    createBaby(baby: Baby) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': 'my-auth-token' // If you use auth.
            })
        };
        baby.rating = [];
        baby.userType = 'baby'
        baby.dataClient = 'Julia';
        //console.log(baby)
        //console.log(JSON.stringify(baby))
        return this.http.post("http://angular2api2.azurewebsites.net/api/internships", baby, { responseType: 'text' });
    }
    updateBaby(baby: Baby) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': 'my-auth-token' // If you use auth.
            })
        };
        baby.userType = 'baby'
        baby.dataClient = 'Julia';
        return this.http.put("http://angular2api2.azurewebsites.net/api/internships/" + baby._id, baby, { responseType: 'text' });
    }
    deleteBaby(baby: Baby) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': 'my-auth-token' // If you use auth.
            })
        };

        return this.http.delete("http://angular2api2.azurewebsites.net/api/internships/" + baby._id, { responseType: 'text' });

    }
    createSitter(sitter: Sitter) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': 'my-auth-token' // If you use auth.
            })
        };
        sitter.rating = [];
        sitter.userType = 'sitter';
        sitter.dataClient = 'Julia';
        return this.http.post("http://angular2api2.azurewebsites.net/api/internships", sitter, { responseType: 'text' });
    }
    rateSitter(sitter: Sitter, rating: number) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': 'my-auth-token' // If you use auth.
            })
        };
        let sitterCopy = { ...sitter, rating: [...sitter.rating, rating] }
        return this.http.put("http://angular2api2.azurewebsites.net/api/internships/" + sitterCopy._id, sitterCopy, { responseType: 'text' });
    }
    deleteSitter(sitter: Sitter) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                //'Authorization': 'my-auth-token' // If you use auth.
            })
        };

        return this.http.delete("http://angular2api2.azurewebsites.net/api/internships/" + sitter._id, { responseType: 'text' });

    }
    static getInitialUsersState(): UsersState {
        return {
            isBaby: undefined, authType: 'unAuthenticated',
            // mock data 
            babies: [
                {
                    _id: "5ad229d7dc32f1a42f5d325a",
                    firstname: "Oli",
                    lastname: "Hult",
                    username: "o.h@dk",
                    birthdate: new Date(2018, 0, 1),
                    area: "København V",
                    rating: [],
                }],
            sitters: [{
                _id: "5ad309337cbda3002a7e92e0",
                firstname: "Jasmine",
                lastname: "Johanson",
                username: "j@j.dk",
                gender: "female",
                birthdate: new Date(1995, 3, 8),
                area: "København Ø",
                rate: 125,
                rating: [10, 9, 8, 10]
            }]
        };
    }
}