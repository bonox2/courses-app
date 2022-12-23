import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getUserData } from '../redux/user/selectors';
import { getUserDataThunk } from '../redux/user/thunk';

export default function Auth({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {pathname} = useLocation()
  const { isAuth, isLoading } = useSelector(getUserData);

  console.log({pathname});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getUserDataThunk());
    } else {
      history.replace('/login');
    }
  }, []);

  useEffect(() => {
    if(isLoading){
        return
    }
    if (isAuth && pathname === '/login') {
        history.replace('/courses');
        return
    }
    if (!isAuth && pathname !== '/login' && pathname !== '/registration') {
        history.replace('/login');
        return
    }
  }, [isAuth, pathname, isLoading]);

  return <>{children}</>;
}
