import React, { Component } from 'react';
import shuffle from "shuffle-array";

import './App.css';
import Haader from "./header";
import Guess from "./guess";
import Flag from "./flag";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      id: -1,
      clicked: -1,
      answer: 0,
      points: 0,
    }
  }

  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
    .then((data) => {
      const res = data.json();
      return res
    })
    .then((res) => {
      const empty = [];
      const contries = res.map((e, i) => {
        const newArray = [];
        newArray.push(e.name, e.flag, i);
        empty.push(newArray); 
      })
      const ar = shuffle(empty);
      this.setState({
        countries: ar
      })
      
    })
    .catch((err) => {
    })
  }

  handleFlag = (id) => {
    this.setState({
      id: id
    })
  }

  handleRadio = (e) => {
    this.setState({
      clicked: e.target.id
    })
  }

  handleSubmit = () => {
    if (this.state.id == this.state.clicked) {
      this.setState({
        answer: 1
      })
    } else {
      this.setState({
        answer: 2
      })
    }
  }

  onNext = (e) => {
    this.setState({
      answer: 0,
      countries: shuffle(this.state.countries),
    });
    this.setState({
      id: this.state.countries.slice(0,4)[0][2]
    })
  }

  morePoints = () => {    
    this.setState((prevState, props) =>{
      return {points: prevState.points +  1}
    })
  }

  render() {
    if (this.state.countries.length>0) {
   const state = this.state.countries.slice(0,4);

    return (
      <div className="App">
        <Haader points={this.state.points}/>
        <Guess morePoints={this.morePoints}onNext={this.onNext} states={state} handleRadio={this.handleRadio} handleSubmit={this.handleSubmit} answer={this.state.answer}/>
        <Flag flag={state[0]} id={state[0][2]} handleFlag={this.handleFlag}/>
      </div>
    );
  }
  else return <div>...loading</div>
}
}

export default App;
