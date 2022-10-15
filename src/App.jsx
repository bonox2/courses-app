import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route path="/courses">
              <Courses/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Registration">
              <Registration/>
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
