import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from './../users.reducer';
import { Baby } from '../home/entities/baby';
import { Sitter } from '../home/entities/sitter';

export class UsersState {
    isBaby: boolean;
    authType: string;
    babies: Baby[];
    sitters: Sitter[];
}

export class IAppState {
    users?: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
    users: usersReducer,
    // when you add more reducers, add them here..

    router: routerReducer
});
