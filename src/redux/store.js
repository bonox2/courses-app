import { createStore, combineReducers, applyMiddleware } from "redux";
import { coursesReducer } from "./courses/reducer";
import { authorsReducer } from "./authors/reducer";
import thunk from "redux-thunk";
import { userReducer } from "./user/reducer";



const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    authors: authorsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))