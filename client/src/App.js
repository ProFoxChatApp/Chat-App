import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Pages/Body';
import Login from './Pages/Login';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      {
        loggedIn ? <div className="app">
          <Header/>
          <Body/>
        </div> :
        <Login setLoggedIn={setLoggedIn} />
      }
    </div>
  );
}

export default App;
