import React from "react";
// import logo from './logo.svg';
import "./App.css";
import LandingPage from "./pages/LandingPage";
// import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/AboutUs";
import Calendar from "./pages/Calendar";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Router>
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/curriculum" component={Curriculum} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
