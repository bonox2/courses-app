import { signIn, signOut, getUserData } from '../../services';
import { setLoadingUserData, setLogIn, setLogOut } from './actionCreators';

export function setLogInThunk(userCredentials) {
  return (dispatch) => {
    signIn(userCredentials)
      .then((response) => {
        const userData = {
          token: response.data.result,
          name: response.data.user.name,
          email: response.data.user.email
        };
        dispatch(setLogIn(userData));
        window.localStorage.setItem('token', userData.token);
        dispatch(getUserDataThunk())
      })
      .catch((error) => {
        alert('Log in error');
        console.log(error);
      });
  };
}
export function getUserDataThunk() {
  return (dispatch) => {
    dispatch(setLoadingUserData())
    getUserData()
      .then((response) => {
        const userData = {
          name: response.data.result.name,
          email: response.data.result.email,
          role: response.data.result.role
        };
        dispatch(setLogIn(userData));
      })
      .catch((error) => {
        alert('Log in error');
        console.log(error);
        dispatch(setLogOut())
      })
  };
}
export function setLogOutThunk() {
  return (dispatch) => {
    signOut()
      .then(() => {
        dispatch(setLogOut());
        window.localStorage.removeItem('token');
      })
      .catch((error) => {
        alert('Log out error');
        console.log(error);
      });
  };
}
