import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import "./Header.css";

export default function Header(){
    return(
        <header className="header">
                <Logo/>
                <div className="user_name">
                    <div>Dave</div>
                    <Button buttonText="Logout"/>
                </div>
        </header>
    )
}