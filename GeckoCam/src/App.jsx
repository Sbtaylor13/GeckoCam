import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Gecko from "./pages/GeckoPage";
import CreateFact from "./pages/CreateFact";

const App = () => {
  return (
    <div>
      <Router>
        <Link to="/createfact"> Create Fact</Link>
        <Link to="/"> Home</Link>
        <Routes>
          <Route path="/" exact Component={Gecko} />
          <Route path="/createfact" exact Component={CreateFact} />
          <Route path="/fact/:id" exact Component={CreateFact} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
