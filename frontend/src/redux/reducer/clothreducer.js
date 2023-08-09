let init = {
    clothColor : "white",
    clothType : "tShirt"
}

function clothReducer (state = init,action){
    const {type, payload } = action;
    switch (type) {
        case "CLOTHCOLOR" :
            
            return{...state,clothColor:payload.color};
        case "CLOTHTYPE" :
            return {...state,clothType : payload.type};
        default:
            return state;
    }
}

export default clothReducer;