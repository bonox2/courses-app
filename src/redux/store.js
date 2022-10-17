import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    userData: () => ({isAuth: false}),
    courses: () => [],
    authors: () => []
})

export const store = createStore(rootReducer)