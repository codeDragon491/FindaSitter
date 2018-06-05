import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';
import { Baby } from './home/entities/baby';
import { UsersService } from './users.service';

const INITIAL_STATE: UsersState = UsersService.getInitialUsersState();

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {

    switch (action.type) {

        //do we need 3 type of cases for each operation ?
        case UsersActions.SET_TYPE: // action.payload: isBaby: boolean
            console.log("in the reducer", action.payload);

            // state.isBaby = action.payload;
            // return state;

            return tassign(state, { isBaby: action.payload });
        case UsersActions.SET_AUTH_TYPE: // action.payload: userType: string
            console.log("in the reducer", action.payload);

            return tassign(state, { authType: action.payload });
        case UsersActions.FAILED_RECEIVED_BABIES:
            // React to a failed ws call, display error to user.
            return state;

        case UsersActions.RECEIVED_BABIES:
            //action.payload is array of users
            // I could set loading flag to false
            return tassign(state, { babies: action.payload });

        case UsersActions.GET_BABIES:
            // I could set a loading flag to true, showing the user that the data is loading
            return state;
        case UsersActions.FAILED_RECEIVED_SITTERS:
            // React to a failed ws call, display error to user.
            return state;

        case UsersActions.RECEIVED_SITTERS:
            //action.payload is array of users
            // I could set loading flag to false
            return tassign(state, { sitters: action.payload });

        case UsersActions.GET_SITTERS:
            // I could set a loading flag to true, showing the user that the data is loading
            return state;

        case UsersActions.CREATE_BABY: // action.payload is a baby object to add
            return state;
        case UsersActions.CREATED_BABY:
            // add the baby to the array without changing the existing array.
            // The spread operator (...) will create a new array based on state.babies and add the object, action.payload
            // state.babies.push(action.payload);
            let newBabyArray = [...state.babies, action.payload];
            // console.log(newBabyArray);
            return tassign(state, { babies: newBabyArray });
        case UsersActions.FAILED_CREATED_BABY: // action.payload is a baby object to add
            return state;
        case UsersActions.UPDATE_BABY:
            return state;
        case UsersActions.FAILED_UPDATED_BABY:
            // React to a failed ws call, display error to user.
            return state;
        case UsersActions.UPDATED_BABY:
            //id, Baby
            let indexBaby = state.babies.findIndex(baby => { return baby._id === action.payload._id });
            //console.log(index)
            //console.log(action.payload)
            return tassign(state, { babies: [...state.babies.slice(0, indexBaby), action.payload, ...state.babies.slice(indexBaby + 1)] });
        case UsersActions.DELETE_BABY:
            return state;
        case UsersActions.DELETED_BABY:
            return tassign(state, { babies: state.babies.filter(baby => baby !== action.payload) });
        case UsersActions.FAILED_DELETED_BABY:
            return state;
        case UsersActions.CREATE_SITTER:
            return state;
        case UsersActions.CREATED_SITTER:
            let newSitterArray = [...state.sitters, action.payload];
            // console.log(newBabyArray);
            return tassign(state, { sitters: newSitterArray });
        case UsersActions.FAILED_CREATED_SITTER:
            return state;
        default:
            return state;
        case UsersActions.DELETE_SITTER:
            return state;
        case UsersActions.DELETED_SITTER:
            return tassign(state, { sitters: state.sitters.filter(sitter => sitter !== action.payload) });
        //[...state.sitters.slice(0, action.payload),...state.sitters.slice(action.payload + 1)]
        case UsersActions.FAILED_DELETED_SITTER:
            return state;
        case UsersActions.RATE_SITTER:
            return state;
        case UsersActions.RATED_SITTER:
            // action.payload has .sitters._id:string and .rating:number

            // find the sitter with the action.payload.sitters._id
            // use spread operator to update the array.
            let indexSitter = state.sitters.findIndex(sitter => { return sitter._id === action.payload.sitter._id });
            let newRatings = [...state.sitters[indexSitter].rating, action.payload.rating];
            let newSitterObj = Object.assign({}, state.sitters[indexSitter]);
            newSitterObj.rating = newRatings;
            let newSitters = [...state.sitters.slice(0, indexSitter),
                newSitterObj,
            ...state.sitters.slice(indexSitter + 1)];
            return tassign(state, { sitters: newSitters });
        case UsersActions.FAILED_RATED_SITTER:
            return state;
    }
}

