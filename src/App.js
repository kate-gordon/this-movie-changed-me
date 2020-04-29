import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import MovieSearch from "./pages/MovieSearch";
import Reflect from "./pages/Reflect";

import { MovieProvider } from "./context/index";

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Router>
          <div>
            <Switch>
              <Route path='/experience'>
                <MovieSearch />
              </Route>
              <Route path='/reflect'>
                <Reflect />
              </Route>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </MovieProvider>
  );
}

export default App;
