import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOutThunk, getUserDataThunk } from '../../redux/user/thunk';
import { getUserData } from '../../redux/user/selectors';
import { useEffect } from 'react';


export default function Header() {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData)

  useEffect(() => {
    dispatch(getUserDataThunk());
  }, []);

  function logOut(e) {
    e.preventDefault();
    dispatch(setLogOutThunk())
  }
  return (
    <header className="header">
      <Logo />
      <div className="user_name">
        <div>{userData.name}</div>
        {userData.isAuth && <Button buttonText="Logout" onClick={logOut} />}
      </div>
    </header>
  );
}
