import { signIn, signOut, getUserData } from '../../services';
import { setLogIn, setLogOut } from './actionCreators';

export function setLogInThunk(userCredentials) {
  return (dispatch) => {
    signIn(userCredentials)
      .then((response) => {
        const userData = {
          token: response.data.result,
          name: response.data.user.name,
          email: response.data.user.email
        };
        dispatch(setLogIn(userData))
        window.localStorage.setItem('token', userData.token)
      })
      .catch((error) => {
        alert('Log in error');
        console.log(error);
      });
  };
}
export function getUserDataThunk(userCredentials) {
  return (dispatch) => {
    getUserData(userCredentials)
      .then((response) => {
        const userData = {
          result:{
            name: response.data.user.name,
            email: response.data.user.email
          }
        };
        dispatch(setLogIn(userData))
        window.localStorage.setItem('token', userData.token)
      })
      .catch((error) => {
        alert('Log in error');
        console.log(error);
      });
  };
}
export function setLogOutThunk() {
  return (dispatch) => {
    signOut()
      .then(() => {
        dispatch(setLogOut())
        window.localStorage.removeItem('token')
      })
      .catch((error) => {
        alert('Log out error');
        console.log(error);
      });
  };
}
