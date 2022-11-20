import { createStore, combineReducers, applyMiddleware } from "redux";
import { coursesReducer } from "./courses/reducer";
import { authorsReducer } from "./authors/reducer";
import { deleteCourseReducer } from "./courseFunctions/reducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
    userData: () => ({isAuth: false}),
    courses: coursesReducer,
    authors: authorsReducer,
    deleteCourse: deleteCourseReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))