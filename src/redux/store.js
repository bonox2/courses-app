import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter/reducer";
import { coursesReducer } from "./courses/reducer";
import { authorsReducer } from "./authors/reducer";



const rootReducer = combineReducers({
    userData: () => ({isAuth: false}),
    courses: coursesReducer,
    authors: authorsReducer,
    counter: counterReducer
})

export const store = createStore(rootReducer)