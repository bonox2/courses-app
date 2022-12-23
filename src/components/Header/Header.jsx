import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOutThunk } from '../../redux/user/thunk';
import { getUserData } from '../../redux/user/selectors';


export default function Header() {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData)

  function logOut(e) {
    e.preventDefault();
    dispatch(setLogOutThunk())
  }
  return (
    <header className="header">
      <Logo />
      {userData.isAuth && <div className="user_name">
        <div>{userData.name} ({userData.role})</div>
        <Button buttonText="Logout" onClick={logOut} />
      </div>}
    </header>
  );
}
