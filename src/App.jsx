import { Switch, Route } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Switch>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
