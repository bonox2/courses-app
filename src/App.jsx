import './App.css';
import { useState } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from './components/CreateCourse/CreateCourse';


export default function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="App">
      <Header/>
      <div className="body_section">
      <button onClick={() => setIsHidden(!isHidden)}>asdasda</button>
        {isHidden && <Courses setIsHidden={setIsHidden}/> }
        {!isHidden && <CreateCourse/>}
      </div>
    </div>
  );
}
