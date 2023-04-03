const INTIAL_STATE = {
    isSignedIn: null,
    userId: null,
};
  

export const Auth = (state = "", action) => {
    switch (action.type) {
        case "SIGN_UP":
            return action.payload;
        case "SIGN_IN":
            return action.payload;
        case "SET_USER":
            return action.payload;
        case "SIGN_OUT":
            return action.payload;
        default:
            return state

    }
}