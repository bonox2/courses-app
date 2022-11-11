import { addNewAuthor } from "./actionCreators"


export function createNewAuthor(newAuthor) {
    return async (dispatch) => {

        //...do your async work (like fetch)
        //fetch('/create-author, newAuthor)...
        //wait for response
        // and then you should call the regular dispatch with action object
        const createdNewAuthor = await fetch()
        dispatch(addNewAuthor(createdNewAuthor))
    }
}