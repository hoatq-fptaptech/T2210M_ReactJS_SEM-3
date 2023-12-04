export const ACTION = {
    UPDATE_CART: "update_cart",
    CLEAR_CART: "clear_cart"
}

const reducer = (state,action)=>{  // action: type - payload
    switch(action.type){
        case ACTION.UPDATE_CART: return {...state,cart:action.payload};
        case ACTION.CLEAR_CART: return {...state,cart:[]};

        default: return state;
    }
}
export default reducer;