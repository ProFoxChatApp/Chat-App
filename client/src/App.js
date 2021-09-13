
import {useEffect} from 'react';
import {
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Body from './Pages/Body';
import Login from './Pages/Login';


function App() {

  return (
    <div className="App">

      <Switch>
        <Route path='/home'>
          <div className="app">
            <Header />
            <Body />
          </div>
        </Route>

        <Route path='/login'>
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
