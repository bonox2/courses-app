import './Login.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import { signIn } from '../../services';

export default function Login() {
    function logIn(){
        signIn()
}
    return (
    <>
        <section className="reg">
          <div className="container">
            <div className="reg_main">
                <h2 className="authorization_title">Login</h2>
                <form className='authorization_form'>
                    <label for="email">Email</label>
                    <Input required className="create_course_input_short input" type="text" name="email"></Input>
                    <label for="password">Password</label>
                    <Input required className="create_course_input_short input" type="text" name="password"></Input>
                    <Button type="submit" buttonText="Login" onClick={logIn}></Button>
                </form>
                <span>If you do not have an account you can <Link to="/Registration" className="link_style" >Registration</Link></span>
            </div>
          </div>
        </section>
    </>
    )
  }
  