import React from 'react';
import './App.css';
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Scores from "./components/Scores";
import Images from "./components/Images";

function App() {
  return (
    <>
    <Header />
    <Instructions />
    <Scores />
    <Images />
    </>
  );
}

export default App;
