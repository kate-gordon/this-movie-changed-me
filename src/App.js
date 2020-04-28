import React from "react";
import Main from "./pages/Main";
import MovieSearch from "./pages/MovieSearch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
