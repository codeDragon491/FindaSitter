import { UsersService } from './users.service';
import { UsersActions } from './users.actions';
import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersEpic {

    constructor(private usersService: UsersService) { }

    getSitters = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.GET_SITTERS) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.getUsers()
                    .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.RECEIVED_SITTERS,
                        payload: result.filter(x => x.userType === 'sitter' && x.dataClient === 'Julia') // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_RECEIVED_SITTERS,
                        payload: error
                    }));
            });
    }
    getBabies = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.GET_BABIES) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.getUsers()
                    .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.RECEIVED_BABIES,
                        payload: result.filter(x => x.userType === 'baby' && x.dataClient === 'Julia') // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_RECEIVED_BABIES,
                        payload: error
                    }));
            });
    }
    createBaby = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.CREATE_BABY) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.createBaby(payload)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.CREATED_BABY,
                        payload: payload // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_CREATED_BABY,
                        payload: error
                    }));
            });
    }
    updateBaby = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.UPDATE_BABY) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.updateBaby(payload)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.UPDATED_BABY,
                        payload: payload // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_UPDATED_BABY,
                        payload: error
                    }));
            });
    }
    deleteBaby = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.DELETE_BABY) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.deleteBaby(payload)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.DELETED_BABY,
                        payload: payload // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_DELETED_BABY,
                        payload: error
                    }));
            });
    }
    createSitter = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.CREATE_SITTER) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.createSitter(payload)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.CREATED_SITTER,
                        payload: payload // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_CREATED_SITTER,
                        payload: error
                    }));
            });
    }
    deleteSitter = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.DELETE_SITTER) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.deleteSitter(payload)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.DELETED_SITTER,
                        payload: payload // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_DELETED_SITTER,
                        payload: error
                    }));
            });
    }
    rateSitter = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.RATE_SITTER) // Listen for this action
            .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.rateSitter(payload.sitter, payload.rating)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.RATED_SITTER,
                        payload: payload // Hack: Db contains all data, not just yours.
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_RATED_SITTER,
                        payload: error
                    }));
            });
    }
}