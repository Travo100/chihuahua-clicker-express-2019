import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "./pages/Game";
import Submit from "./pages/Submit";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
          </ul>
          <Route exact path="/" component={Game} />
          <Route exact path="/submit" component={Submit} />
        </div>
      </Router>
    )
  }
}

export default App;
