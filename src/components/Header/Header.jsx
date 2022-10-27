import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { signOut, getUserData, signIn } from '../../services';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const [userName, setUserName] = useState(null);
  const history = useHistory()
  useEffect(() => {
    getUserData()
      .then((userData) => {
        console.log(userData);
        setUserName(userData.result.name)
        history.push('/courses')
      })
      .catch((error) => {
        console.log(error)
        history.push('/login')
    });
  }, []);
    function logOut(e) {
      e.preventDefault();
      signOut({
      })
        .then((json) => {
          console.log(json);
          history.push('/login');
        })
        .catch((err) => alert(err));
    }
  return (
    <header className="header">
      <Logo />
      <div className="user_name">
        <div>{userName}</div>
        {userName && <Button buttonText="Logout" onClick={logOut} />}
      </div>
    </header>
  );
}
