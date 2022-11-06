import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { signOut, getUserData} from '../../services';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
  incrementAmountCounter
} from '../../redux/counter/actionCreators';

export default function Header() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);
  const history = useHistory();
  useEffect(() => {
    getUserData()
      .then((userData) => {
        console.log(userData);
        setUserName(userData.result.name);
        history.push('/courses');
      })
      .catch((error) => {
        console.log(error);
        history.push('/login');
      });
  }, []);
  function logOut(e) {
    e.preventDefault();
    signOut({})
      .then((json) => {
        console.log(json);
        history.push('/login');
      })
      .catch((err) => alert(err));
  }
  return (
    <header className="header">
      <Logo />
      <button
        onClick={() => {
          dispatch(incrementCounter());
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrementCounter());
        }}>
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(resetCounter());
        }}>
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(incrementAmountCounter(100));
        }}>
        Increment by 100
      </button>
      <button
        onClick={() => {
          dispatch(incrementAmountCounter(20));
        }}>
        Increment by 20
      </button>
      <div className="user_name">
        <div>{userName}</div>
        {userName && <Button buttonText="Logout" onClick={logOut} />}
      </div>
    </header>
  );
}
