import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Database from './components/database';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/database">
              <Database />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>{'D-WO=>B'}</h1>
      <p>It's a project about Database-without-Backend</p>
      <Link to="/database">
        <button>Start</button>
      </Link>
    </div>
  )
}

export default App;
