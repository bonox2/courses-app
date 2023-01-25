import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

import { setLogInThunk } from "../../redux/user/thunk";

import "./Login.css";

export default function Login() {
  const dispatch = useDispatch();
  function logIn(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(
      setLogInThunk({
        email: form.email.value.trim(),
        password: form.password.value.trim(),
      })
    );
  }
  return (
    <>
      <section className="login-section">
        <div className="login-box">
          <h2>Login</h2>
          <form  onSubmit={logIn}>
            <div className="user-box">
              <Input
                required 
                type="email"
                name="email"
                placeHolderText="Enter your email"
              ></Input>
              <label htmlFor="email">Email</label>
            </div>
            <div className="user-box">
              <Input
                required 
                type="password"
                name="password"
                placeHolderText="Enter your password"
              ></Input>
              <label htmlFor="password">Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span> 
              spam
            </a>
              {/* <Button type="submit" buttonText="Login">
                </Button> */}
          </form>

          <span>
            If you do not have an account you can{" "}
            <Link to="/registration" className="link_style">
              Registration
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}
