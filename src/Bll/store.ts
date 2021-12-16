import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {weatherReducer} from "./weatherReducer";
import {persistedState} from "../common/LocalStorage/LocalStorage";


export const reducers = combineReducers({
    weather: weatherReducer,
})


export const store = createStore(reducers, persistedState(), applyMiddleware(thunkMiddleware))
    // шаг 2 -> persistedState
store.subscribe(()=> {        // шаг 1
    localStorage.setItem('elems', JSON.stringify(store.getState()))
})


export type AppStoreType = ReturnType<typeof reducers>