import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getUserData } from '../redux/user/selectors';
import { getUserDataThunk } from '../redux/user/thunk';

export default function Auth({ children,course }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {pathname} = useLocation()
  const { isAuth, isLoading } = useSelector(getUserData);
  const userData = useSelector(getUserData)

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

  // useEffect(() => {
  //   if(isLoading){
  //       return
  //   }
  //   if (userData.role === "user" && pathname === `/courses/update/${course.id}`){
  //       history.replace('/courses');
  //       return
  //   }
  // }, [pathname, isLoading]);

  return <>{children}</>;
}
