import { createStore,  applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import promiseMiddleware from "redux-promise-middleware";
import rootReducers from "./reducer/rootReducer";


export default createStore(
    rootReducers,
    applyMiddleware(thunk, promiseMiddleware())
)