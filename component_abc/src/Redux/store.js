import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
const initalstate={
    value:'',
}
export const store=legacy_createStore(reducer,initalstate)