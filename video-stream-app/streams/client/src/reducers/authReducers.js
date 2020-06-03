import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSigned: null,
    userId: null
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        // case "SIGN_IN":
        case SIGN_IN:
            return { ...state, isSigned: true, userId: action.payload };
        // case "SIGN_OUT":
        case SIGN_OUT:
            return { ...state, isSigned: false, userId: null };
        default:
            return state;
    }

};