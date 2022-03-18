import { SET_USER } from "./actionType"

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload  
});

export function signinApi(){
    var payload = {

    }
    return (dispatch) =>{
        dispatch(setUser(payload))
    }
}