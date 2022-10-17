import './Login.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useHistory } from 'react-router-dom';
import { signIn } from '../../services';
export default function Login() {
    const history = useHistory();
    function logIn(e) {
      e.preventDefault();
      const form = e.target;
      signIn({
        email: form.email.value.trim(),
        password: form.password.value.trim()
      })
        .then((json) => {
          console.log(json);
          history.push('/courses');
        })
        .catch((err) => alert(err));
    }
  return (
    <>
      <section className="reg">
        <div className="container">
          <div className="reg_main">
            <h2 className="authorization_title">Login</h2>
            <form className="authorization_form" onSubmit={logIn}>
              <label for="email">Email</label>
              <Input
                required
                className="create_course_input_short input"
                type="email"
                name="email"
                placeHolderText="Enter your email"></Input>
              <label for="password">Password</label>
              <Input
                required
                className="create_course_input_short input"
                type="password"
                name="password"
                placeHolderText="Enter your password"></Input>
              <Button type="submit" buttonText="Login" ></Button>
            </form>
            <span>
              If you do not have an account you can{' '}
              <Link to="/Registration" className="link_style">
                Registration
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
