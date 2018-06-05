const deepFreeze = require('deep-freeze');
import { initServicesIfNeeded } from '@angular/core/src/view';
import { usersReducer } from './users.reducer';
import * as types from './users.actions';
import { UsersState } from './store/store';
import { UsersService } from './users.service';
import { TestBed } from '@angular/core/testing';

describe('register reducer', () => {
    let initialState;
    beforeEach(() => {
        initialState = UsersService.getInitialUsersState();
        deepFreeze(initialState);
    })

    it('should return the initial state', () => {
        expect(usersReducer(undefined, {
        })).toEqual(initialState);
    });

    it('Toggle isBaby or sitter', () => {
        let newState = UsersService.getInitialUsersState();
        newState.isBaby = true;

        expect(
            usersReducer(initialState, {
                type: types.UsersActions.SET_TYPE,
                payload: true
            })).toEqual(newState);
    });
    it('Should add a new baby object to the babies array', () => {
        // create 'mock' of initial state
        // add baby by calling reducer function
        // check that state is correct. Use deep freeze to check no mutations.
        let afterState = UsersService.getInitialUsersState();
        let baby = {
            firstname: 'Peter',
            lastname: 'Petursson',
            username: 'test baby 1',
            birthdate: new Date(2018, 0, 1),
            area: 'Copenhagen',
            rating: []
        };
        afterState.babies.push(baby);

        let newState = usersReducer(initialState, {
            type: types.UsersActions.CREATED_BABY,
            payload: baby
        });
        expect(newState.babies.length).toEqual(2);
        expect(newState).toEqual(afterState);
    });
    it('Should get the babies array', () => {
        let afterState = UsersService.getInitialUsersState();
        let babies = [{
            _id: "5ad228ffdc32f1a42f5d3259",
            firstname: "Oliver",
            lastname: "Hultgren",
            username: "o@h",
            birthdate: new Date(2018, 0, 1),
            area: "København Ø",
            rating: [],
            userType: "baby",
            dataClient: "Julia"
        },
        {
            _id: "5ad229d7dc32f1a42f5d325a",
            firstname: "Oli",
            lastname: "Hult",
            username: "o.h@dk",
            birthdate: new Date(2018, 0, 1),
            area: "København V",
            rating: [],
            userType: "baby",
            dataClient: "Julia",
        }, {
            _id: "5ad309337cbda3002a7e92e0",
            firstname: "Jenny",
            lastname: "Lopez",
            username: "jl@com",
            birthdate: new Date(2018, 0, 1),
            area: "København Ø",
            rating: [],
            userType: "baby",
            dataClient: "Julia",
        }]
        afterState.babies = babies;
        let newState = usersReducer(initialState, {
            type: types.UsersActions.RECEIVED_BABIES,
            payload: babies

        });
        expect(newState).toEqual(afterState);
    })

    it('Should update a baby object in the babies array', () => {
        let afterState = UsersService.getInitialUsersState();
        let updatedBaby = {
            _id: "5ad229d7dc32f1a42f5d325a",
            firstname: "Oli",
            lastname: "Hult",
            username: "o.h@dk",
            birthdate: new Date(2018, 0, 1),
            area: "København N", // updated area
            rating: [],
            userType: "baby",
            dataClient: "Julia"
        }
        let index = afterState.babies.findIndex(baby => baby._id === updatedBaby._id);
        if (index > -1) { afterState.babies[index] = updatedBaby }
        let newState = usersReducer(initialState, {
            type: types.UsersActions.UPDATED_BABY,
            payload: updatedBaby

        });
        expect(newState).toEqual(afterState)
    });
    /*it('Should delete a sitter object in the sitters array', () => {
        let afterState = UsersService.getInitialUsersState();
        let deletedSitter = {
            _id: "5ad309337cbda3002a7e92e0",
            firstname: "Jasmine",
            lastname: "Johanson",
            username: "j@j.dk",
            gender: "female",
            birthdate: new Date(1995, 3, 8),
            area: "København Ø",
            rate: 125,
            rating: [10, 9, 8, 10]
        }
        let index = afterState.sitters.findIndex(sitter => sitter._id === deletedSitter._id);
        if (index > -1) { afterState.sitters.splice(index) }
        console.log(afterState.sitters)
        let newState = usersReducer(initialState, {
            type: types.UsersActions.DELETED_SITTER,
            payload: deletedSitter
        });
        expect(newState).toEqual(afterState)
    });*/


});