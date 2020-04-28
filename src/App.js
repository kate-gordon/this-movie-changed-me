import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import MovieSearch from "./pages/MovieSearch";

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "flex-end",
              height: "10vh",
            }}
          >
            <li style={{ margin: "5px", padding: "5px" }}>
              <Link to='/'>Home</Link>
            </li>
            <li style={{ margin: "5px", padding: "5px" }}>
              <Link to='/experience'>The Experience</Link>
            </li>
          </ul>

          <Switch>
            <Route path='/experience'>
              <MovieSearch />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
