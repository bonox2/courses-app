import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserData } from '../redux/user/selectors';

export default function ProtectedRoute({ children, redirect = '/courses' }) {
  const { role } = useSelector(getUserData);
  const history = useHistory();

  const isAdmin = role === 'admin'

  useEffect(() => {
    if (!isAdmin) {
      history.replace(redirect);
    }
  }, [redirect, history, isAdmin]);

  if (!isAdmin) return <></>;

  return <>{children}</>;
}
