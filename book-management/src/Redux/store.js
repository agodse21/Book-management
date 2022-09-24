import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import {reducer as AuthReducer} from "./Auth/reducer";
import {reducer as AppReducer} from "./App/reducer";
import thunk from "redux-thunk"
const rootReducer=combineReducers({AppReducer,AuthReducer})

 const store=legacy_createStore(rootReducer,applyMiddleware(thunk))


 export {store}