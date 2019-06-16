import React from "react";
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Scores from "./components/Scores";
import Images from "./components/Images";

class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Click any image to start!",
    id1: 0,
    id2: 0,
    id3: 0,
    id4: 0,
    id5: 0,
    id6: 0,
    id7: 0,
    id8: 0,
    id9: 0,
    id10: 0,
    id11: 0,
    id12: 0
  };

  handleClick = event => {
    const id = "id" + event.target.id;
    if (this.state[id] === 1)
     {
      this.resetGame();
    }
    const updatedScore = this.state.currentScore + 1;
    this.setState({
      currentScore: updatedScore,
      [id]: 1,
      message: "Keep going!"
    });
  };

  resetGame = () => {
    this.setState({
      message: "Sorry, you Britta'd it! Click an image to start over.",
      currentScore: 0,
      id1: 0,
      id2: 0,
      id3: 0,
      id4: 0,
      id5: 0,
      id6: 0,
      id7: 0,
      id8: 0,
      id9: 0,
      id10: 0,
      id11: 0,
      id12: 0
    });
  };

  render() {
    return (
      <>
        <Header />
        <Instructions />
        <Scores message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <Images handleClick={this.handleClick}/>
      </>
    );
  }
}

export default App;
