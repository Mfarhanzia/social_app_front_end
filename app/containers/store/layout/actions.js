import { TOGGLE } from './actionTypes';
 

export const toggleSidebar = (is_toggle) => {
    return {
        type: TOGGLE,
            payload: { is_toggle }
           
    }
}


