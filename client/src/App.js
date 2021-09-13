import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Pages/Body';
import Login from './Pages/Login';
import {Router} from '@reach/router'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const App = () => {
    return (
      <div className="app" path='home'>
          <Header />
          <Body />
        </div> 
    )
  }

  return (
    <div className="App">
      <Router>
        <App path='/'/>
        <Login path='login' />
        </Router>
    </div>
  );
}

export default App;
