import './Registration.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../../services';

export default function Registration() {
  const history = useHistory();
  function Registration(e) {
    e.preventDefault();
    const form = e.target;
    signUp({
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value.trim()
    })
      .then((json) => {
        console.log(json);
        history.push('/login');
      })
      .catch((err) => alert(err));
  }
  return (
    <>
      <section className="authorization">
        <div className="container">
          <div className="authorization_main">
            <h2 className="authorization_title">Registration</h2>
            <form className="authorization_form" onSubmit={Registration}>
              <label htmlFor="name">Name</label>    
              <Input
                required
                className="input_short input"
                type="text"
                name="name"
                placeHolderText="Enter your name"></Input>
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
              <Button type="submit" buttonText="Registartion"></Button>
            </form>
            <span>
              If you have an account you can{' '}
              <Link to="/login" className="link_style">
                Login
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
