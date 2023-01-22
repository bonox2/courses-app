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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getUserDataThunk());
    } else {
      history.replace('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [isAuth, pathname, isLoading, history]);

  return <>{children}</>;
}
