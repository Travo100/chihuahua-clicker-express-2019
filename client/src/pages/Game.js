import React, { Component } from 'react';
import Scoreboard from "../components/Scoreboard";
import Card from "../components/Card";
import API from "../utils/API";

class Game extends Component {

  state = {
    randomId: 1,
    score: 0,
    tally: 0,
    chihuahuas: []
  };

  componentDidMount() {
    API
      .getChihuahuas()
      .then(res => {
        console.log(res.data);
        this.setState({
          chihuahuas: res.data
        });
        this.setNewRandomId(this.state.chihuahuas);
      });
  }
  
  handleClicked = id => {
    this.setState({
      tally: this.state.tally + 1
    });
    if(this.state.randomId === id) {
      this.setState({
        score: this.state.score + 1
      });
      this.setNewRandomId(this.state.chihuahuas);
    }
  }

  setNewRandomId = (array) => {
    const randomId = array[Math.floor(Math.random()*array.length)]._id;
    this.setState({
      randomId: randomId
    });
  }
  

  render() {
    return (
      <div className="container">
        <Scoreboard 
          title="Chihuahua Clicker 2019"
          score={this.state.score} 
          tally={this.state.tally} 
          randomId={this.state.randomId} 
        />
        <div className="row">
          {this.state.chihuahuas.map(chihuahua => (
            <Card 
              key={chihuahua._id}
              id={chihuahua._id}
              name={chihuahua.name}
              image={chihuahua.imgUrl}
              handleClicked={this.handleClicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
