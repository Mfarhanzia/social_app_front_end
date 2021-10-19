import { loginState } from './models';
import { loginSuccessAction, loggedOutAction } from './actions';


const initialState = loginState();

export default function loggedInReducer(state = initialState, action) {
    switch (action.type) {
        case loginSuccessAction().type:
            return {...state, user: {...action.payload},
            };
        case loggedOutAction().type:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
}
