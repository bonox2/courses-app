import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function ProtectedRoute({ children, redirect = '/courses' }) {
  const history = useHistory();
  let ok = false;

  useEffect(() => {
    if (!ok) {
      history.replace(redirect);
    }
  }, [ok, redirect]);

  if (!ok) return <></>;

  return <>{children}</>;
}
