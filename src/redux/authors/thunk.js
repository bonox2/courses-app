import { addNewAuthor,setAuthors } from "./actionCreators"
import { createdNewAuthor, getAuthors } from '../../services';


export function getAuthorsThunk() {
    return async (dispatch) => {
        getAuthors()
        .then((response) => {
          dispatch(setAuthors(response.data.result));
        })
        .catch((error) => {
          alert('Getting courses error!');
          console.log(error);
        });
    }
}
export function addNewAuthorThunk(newAuthor) {
    return async (dispatch) => {
      createdNewAuthor(newAuthor)
        .then((response) => {
          dispatch(addNewAuthor(response.data.result));
        })
        .catch((error) => {
          alert('Creating course error!');
          console.log(error);
        });
    };
  }