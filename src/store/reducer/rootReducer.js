import {combineReducers} from 'redux'
import bookingReducer from './bookingReducer';
import authReaducer from './userAuthReducers'
import AdminReducer from './adminReducer'

const rootReducers = combineReducers({
    booking : bookingReducer,
    auth: authReaducer,
    // adminReducer: AdminReducer
})

export default rootReducers