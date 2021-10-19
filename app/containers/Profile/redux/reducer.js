import { editProfileState } from './models';
import { setUserInfoAction } from './actions';


const initialState = editProfileState();

export default function editProfileReducer(state = initialState, action) {
    switch (action.type) {
        case setUserInfoAction().type:
            return {...state, userInfo: {...action.payload},
            };
        default:
            return state;
    }
}
