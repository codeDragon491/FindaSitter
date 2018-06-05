import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';
import { Baby } from './home/entities/baby';
import { Sitter } from './home/entities/sitter';

@Injectable()
export class UsersActions {
    constructor(private ngRedux: NgRedux<IAppState>) { }

    // Available actions
    static SET_TYPE: string = 'SET_TYPE';
    static SET_AUTH_TYPE: string = 'SET_AUTH_TYPE';
    static GET_BABIES: string = 'GET_BABIES';
    static RECEIVED_BABIES: string = 'RECEIVED_BABIES';
    static FAILED_RECEIVED_BABIES: string = 'FAILED_RECEIVED_BABIES';
    static GET_SITTERS: string = 'GET_SITTERS';
    static RECEIVED_SITTERS: string = 'RECEIVED_SITTERS';
    static FAILED_RECEIVED_SITTERS: string = 'FAILED_RECEIVED_SITTERS';
    static CREATE_BABY: string = 'CREATE_BABY';
    static CREATED_BABY: string = 'CREATED_BABY';
    static FAILED_CREATED_BABY: string = 'FAILED_CREATED_BABY';
    static UPDATE_BABY: string = 'UPDATE_BABY';
    static UPDATED_BABY: string = 'UPDATED_BABY';
    static FAILED_UPDATED_BABY = 'FAILED_UPDATED_BABY';
    static DELETE_BABY: string = 'DELETE_BABY';
    static DELETED_BABY: string = 'DELETED_BABY';
    static FAILED_DELETED_BABY: string = 'FAILED_DELETED_BABY';
    static CREATE_SITTER: string = 'CREATE_SITTER';
    static CREATED_SITTER: string = 'CREATED_SITTER';
    static FAILED_CREATED_SITTER: string = 'FAILED_CREATED_SITTER';
    static DELETE_SITTER: string = 'DELETE_SITTER';
    static DELETED_SITTER: string = 'DELETED_SITTER';
    static FAILED_DELETED_SITTER: string = 'FAILED_DELETED_SITTER';
    static RATE_SITTER: string = 'RATE_SITTER';
    static RATED_SITTER: string = 'RATED_SITTER';
    static FAILED_RATED_SITTER: string = 'FAILED_RATED_SITTER';


    getSitters() {
        this.ngRedux.dispatch({
            type: UsersActions.GET_SITTERS
        })
    }

    getBabies() {
        this.ngRedux.dispatch({
            type: UsersActions.GET_BABIES
        })
    }

    createBaby(baby: Baby): void {
        console.log(baby);
        this.ngRedux.dispatch({
            type: UsersActions.CREATE_BABY,
            payload: baby
        });
    }
    updateBaby(baby: Baby): void {
        console.log(baby);
        this.ngRedux.dispatch({
            type: UsersActions.UPDATE_BABY,
            payload: baby
        });
    }
    deleteBaby(baby: Baby): void {
        console.log(baby);
        this.ngRedux.dispatch({
            type: UsersActions.DELETE_BABY,
            payload: baby
        });
    }
    createSitter(sitter: Sitter): void {
        console.log(sitter);
        this.ngRedux.dispatch({
            type: UsersActions.CREATE_SITTER,
            payload: sitter
        });
    }
    deleteSitter(sitter: Sitter): void {
        console.log(sitter);
        this.ngRedux.dispatch({
            type: UsersActions.DELETE_SITTER,
            payload: sitter
        });
    }
    rateSitter(sitter: Sitter, rating: number): void {
        console.log(sitter);
        console.log(rating);
        this.ngRedux.dispatch({
            type: UsersActions.RATE_SITTER,
            payload: { sitter, rating }
        });
    }
    setType(isBaby: boolean): void {
        console.log("in action ", isBaby);

        this.ngRedux.dispatch({
            type: UsersActions.SET_TYPE,
            payload: isBaby
        });
    }
    setAuthType(authType: string): void {
        console.log("in action ", authType);

        this.ngRedux.dispatch({
            type: UsersActions.SET_AUTH_TYPE,
            payload: authType
        });
    }
}
