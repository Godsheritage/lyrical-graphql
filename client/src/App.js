import React from "react";
import SongList from "./components/SongList.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<SongList />} />
        </Routes>
      </Router>

  );
};

export default App;
