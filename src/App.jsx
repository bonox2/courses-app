import './App.css';
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState } from 'react'
import toggleShown from './helpers/toggleShown';

export default function App() {
  const [count,setCount] = useState(0)
  
  const [isShown, setIsShown] = React.useState(true)
  function toggleShown(){
    setIsShown(prevShown => !prevShown)
}

  return (
    <div className="App">
      <Header/>
      <div className="body_section">
        {isShown && <Courses/>}
        {isShown = false && <CreateCourse/>}
      </div>
    </div>
  );
}

