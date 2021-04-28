import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './components/home'
import Database from './components/database';
import WrongPlace from './components/wrongplace';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/database" exact component={Database} />
            <Route path="/" exact component={Home} />
            <Route path="/wrongplace" exact component={WrongPlace} />
            <Redirect path='*' to='/wrongplace' />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
