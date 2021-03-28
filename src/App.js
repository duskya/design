import logo from './logo.svg';
import './App.css';
import Headers from './components/header/index'
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
      <Headers />
      <div>hhhhh</div>
    </Router>
   </>
  );
}

export default App;
