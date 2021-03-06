import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import Calendar from "./pages/Calendar/Calendar";
import Curriculum from "./pages/Curriculum/Curriculum";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

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
          <Route path="/projects" component={Projects} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
