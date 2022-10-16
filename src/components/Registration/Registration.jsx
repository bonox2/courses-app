import './Registration.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import { signUp } from '../../services';

export default function Registration() {
    function Registr(){
        signUp({
            name: '',
            email: '',
            password: ''
        })
}
    return (
    <>
        <section className="reg">
          <div className="container">
            <div className="reg_main">
                <h2 className="authorization_title">Registration</h2>
                <form className='authorization_form'>
                    <label for="name">Name</label>
                    <Input required className="create_course_input_short input" type="text" name="name" placeHolderText="Enter your name"></Input>
                    <label for="email">Email</label>
                    <Input required className="create_course_input_short input" type="text" name="email" placeHolderText="Enter your email"></Input>
                    <label for="password">Password</label>
                    <Input required className="create_course_input_short input" type="text" name="password" placeHolderText="Enter your password"></Input>
                    <Button type="submit" buttonText="Registartion" onClick={Registr}></Button>
                </form>
                <span>If you have an account you can <Link to="/login" className="link_style" >Login</Link></span>
            </div>
          </div>
        </section>
    </>
    )
  }
  