import './App.css';
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from './components/CreateCourse/CreateCourse';
// import toggleShown from './helpers/toggleShown';

export default function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="body_section">
          {/* {isShown && <Courses/>} */}
          <CreateCourse/>
      </div>
    </div>
  );
}

