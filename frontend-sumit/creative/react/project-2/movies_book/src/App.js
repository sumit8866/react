import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Bookt from './Bookt';
import Selectt from './Selectt';
import MovieLoginPage from './Login'
import SignUpPage from './SignUpPage';
import Users from './Users';
import About from './About';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header1 from './Header1';
function App() {
  return (<>
  {/* <Header1></Header1> */}
  {/* <Header></Header> */}
  {/* <Bookt></Bookt> */}
  {/* <Selectt></Selectt> */}
  {/* <MovieLoginPage></MovieLoginPage> */}
  {/* <SignUpPage></SignUpPage> */}

          {/* <Router>
 <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Bookt">About</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
     <Switch>
          <Route  path="/Bookt">
            <Bookt />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </Router> */}

           <Router>
        {/* <Header1></Header1> */}
     <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/Home">
            <Header />
          </Route>
          <Route  path="/Pages">
            <Bookt />
          </Route>
          <Route path="/Menu">
            <Selectt />
          </Route>
        </Switch>
        </Router> 
  </>
  );
}

export default App;
