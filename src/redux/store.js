import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter/reducer";
import { coursesReducer } from "./courses/reducer";


const rootReducer = combineReducers({
    userData: () => ({isAuth: false}),
    courses: coursesReducer,
    authors: () => [],
    counter: counterReducer
})

export const store = createStore(rootReducer)