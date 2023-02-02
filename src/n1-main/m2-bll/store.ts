import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from 'redux-thunk'
import {appReducer} from "./app-reducer";
import {authReducer} from "./auth-reducer";

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
