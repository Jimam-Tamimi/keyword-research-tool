import { combineReducers } from 'redux'  
import authReducer from './auth/reducer'
import alertReducer from './alert/reducer'
import loaderReducer from './loader/reducre'


const rootReducer = combineReducers({
    auth: authReducer,
    alerts : alertReducer,
    loader: loaderReducer, 
})

export default rootReducer