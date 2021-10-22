import { userInfo } from './models';
import { followersLoadedAction, followeedByLoadedAction, unFollowDoneAction } from './actions';


const initialState = userInfo();

export default function userInfoReducer(state = initialState, action) {
    switch (action.type) {
        case followersLoadedAction().type:
            return {...state, followers: {...action.payload},
            };
        case followeedByLoadedAction().type:
            return {...state, followed_by: {...action.payload},
            };
        case unFollowDoneAction().type:
            return {...state };
        default:
            return state;
    }
}
