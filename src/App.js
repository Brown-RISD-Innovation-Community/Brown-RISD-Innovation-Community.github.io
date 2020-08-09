import React from "react";
// import logo from './logo.svg';
import "./App.css";
import LandingPage from "./pages/LandingPage";
// import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/home" />
          <Route path="/calendar" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
