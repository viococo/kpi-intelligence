// Imports
//// Packages
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
//// Pages
import Home from "./pages/Home";
import InvestissementDetail from "./pages/Investissement/Details";
//

// Router
const App = () => {
  return (
    <Router>
      <div className="layout my-5 mx-auto px-3">
        <Route exact path="/" component={Home} />
        <Route path="/investissement/:id" component={InvestissementDetail} />
        <Redirect exact path="/investissement" to="/" />
        <Redirect to="/" />
      </div>
    </Router>
  );
};

export default App;
