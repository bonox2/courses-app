import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { Switch, Route } from 'react-router-dom';

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
          </Switch>
        </main>
      </div>
    </div>
  );
}
