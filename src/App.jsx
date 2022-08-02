import './App.css';
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState } from 'react'


export default function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <Header/>
      <CreateCourse/>
    </div>
  );
}

