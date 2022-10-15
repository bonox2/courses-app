import './Registration.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';

export default function Registration() {
    return (
    <>
        <section className="reg">
          <div className="container">
            <div className="reg_main">
                <h2 className="authorization_title">Registration</h2>
                <form className='authorization_form'>
                    <label for="fname">Name</label>
                    <Input className="create_course_input_short input" type="text" name="fname" value="Enter name"></Input>
                    <label for="fname">Email</label>
                    <Input className="create_course_input_short input" type="text" name="fname" value="Enter email"></Input>
                    <label for="lname">Password</label>
                    <Input className="create_course_input_short input" type="text" name="lname" value="Enter password"></Input>
                    <Button type="submit" buttonText="Registartion"></Button>
                </form>
                <span>If you have an account you can <Link to="/login" className="link_style" >Login</Link></span>
            </div>
          </div>
        </section>
    </>
    )
  }
  