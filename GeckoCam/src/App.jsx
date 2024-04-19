import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Gecko from "./pages/GeckoPage";
import CreateFact from "./pages/CreateFact";
import FactView from "./pages/FactView";
import Login from "./pages/LoginUser";
import Register from "./pages/RegisterUser";

const App = () => {
  return (
    <div>
      <Router>
        <div className="bg-black">
          <Link to="/createfact" className="p-5 text-3xl text-yellow-600">
            {" "}
            Create Fact
          </Link>
          <Link to="/" className="p-5 text-3xl text-yellow-600">
            {" "}
            Home
          </Link>
          <Link to="/login" className="p-5 text-3xl text-yellow-600">
            {" "}
            Login
          </Link>
          <Link to="/register" className="p-5 text-3xl text-yellow-600">
            {" "}
            Register
          </Link>
        </div>

        <Routes>
          <Route path="/" exact Component={Gecko} />
          <Route path="/createfact" exact Component={CreateFact} />
          <Route path="/fact/:id" exact Component={FactView} />
          <Route path="/register" exact Component={Register} />
          <Route path="/login" exact Component={Login} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
