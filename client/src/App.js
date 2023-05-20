import React from "react";
import AddSong from "./components/AddSong.jsx";
import SongList from "./components/SongList.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/addsong" element={<AddSong />} />
      </Routes>
    </Router>
  );
};

export default App;
