import "./App.css";
import Home from "./Home";
import Hospitals from "./Hospitals";
import Certificate from "./Certificate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Siddhivinayak from "./Siddhivinayak";
import ReactGA from 'react-ga';

function initializeAnalytics(){
  ReactGA.initialize("G-VY6V29MQZJ")
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeAnalytics();
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/certificate">
            <Certificate />
          </Route>
          <Route path="/siddhivinayak">
            <Siddhivinayak />
          </Route>

          <Route path="/hospitals">
            <Hospitals />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
