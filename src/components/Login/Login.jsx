import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { setLogInThunk } from '../../redux/user/thunk';

import './Login.css';



export default function Login() {
  const dispatch = useDispatch();
  function logIn(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(
      setLogInThunk({
        email: form.email.value.trim(),
        password: form.password.value.trim()
      })
    );
  }
  return (
    <>
      <section className="authorization">
        <div className="container">
          <div className="authorization_main">
            <h2 className="authorization_title">Login</h2>
            <form className="authorization_form" onSubmit={logIn}>
              <label htmlFor="email">Email</label>
              <Input
                required
                className="input_short input"
                type="email"
                name="email"
                placeHolderText="Enter your email"></Input>
              <label htmlFor="password">Password</label>
              <Input
                required
                className="input_short input"
                type="password"
                name="password"
                placeHolderText="Enter your password"></Input>
              <Button type="submit" buttonText="Login"></Button>
            </form>
            <span>
              If you do not have an account you can{' '}
              <Link to="/registration" className="link_style">
                Registration
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
