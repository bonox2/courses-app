import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counter/reducer";
import { coursesReducer } from "./courses/reducer";
import { authorsReducer } from "./authors/reducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
    userData: () => ({isAuth: false}),
    courses: coursesReducer,
    authors: authorsReducer,
    counter: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))