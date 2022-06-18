import './App.css';
import Header from "./components/Header/Header";
import CourseCard from "./components/Courses/components/CourseCard/CourseCard";


export default function App() {
  return (
    <div className="App">
      <Header/>
      <CourseCard/>
    </div>
  );
}

