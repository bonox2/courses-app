import './Login.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
    <>
        <section className="reg">
          <div className="container">
            <div className="reg_main">
                <h2 className="authorization_title">Login</h2>
                <form className='authorization_form'>
                    <label for="fname">Email</label>
                    <Input className="create_course_input_short input" type="text" name="fname" value="Enter email"></Input>
                    <label for="lname">Password</label>
                    <Input className="create_course_input_short input" type="text" name="lname" value="Enter password"></Input>
                    <Button type="submit" buttonText="Registartion"></Button>
                </form>
                <span>If you do not have an account you can <Link to="/Registration" className="link_style" >Registration</Link></span>
            </div>
          </div>
        </section>
    </>
    )
  }
  