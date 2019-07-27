// Imports
//// Packages
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
//// Pages
import Home from "./pages/Home";
import InvestissementDetail from "./pages/Investissement/Details";
import InvestissementList from "./pages/Investissement/List";
//

// Router
const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/investissement" component={InvestissementList} />
        <Route path="/investissement/:id" component={InvestissementDetail} />
        <Redirect to="/" />
      </div>
    </Router>
  );
};

function Investissement({ match }) {
  return (
    <div>
      <h2>Investissement</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a investissement.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/investissement">Investissement</Link>
      </li>
    </ul>
  );
}

export default App;
