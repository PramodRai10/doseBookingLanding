import "./App.css";
import Home from "./Home";
import Hospitals from "./Hospitals";
import Certificate from "./Certificate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/certificate">
            <Certificate />
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
