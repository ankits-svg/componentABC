import { SHOW_VALUE } from "./actionType";



export const reducer=(state,{type,payload})=>{
    // console.log("payload:",payload)
    switch (type) {
        case SHOW_VALUE:
            return {...state,value:payload}
    
        default:
            return state;
    }
}