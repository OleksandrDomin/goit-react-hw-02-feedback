
import { Component } from 'react';
import './App.css';
// import Buttons from "./conponents/buttons/Buttons";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
    
  
   onInctrement =() => {
     this.setState(prevState => 
       ({ good: prevState.good + 1, }))};
  
     onA =() => {
     this.setState((prevState) => ({
     neutral: prevState.neutral + 1,
  }))
     };
     onB =() => {
     this.setState((prevState) => ({
    bad: prevState.bad + 1,
  }))
};
  


  render() {
    const sum = this.state.good + this.state.neutral + this.state.bad;

    const percent = ((this.state.good*100)/sum).toFixed(0);
    return (
      <>
        <h1>Please leave fidbeck</h1>
        {/* <Buttons onClick={this.onInctrement} /> */}

        <button type="button" onClick={this.onInctrement}>Good</button>
        <button type="button" onClick={this.onA}>Neutral</button>
        <button type="button" onClick={this.onB}>Bad</button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {sum} </p>
        <p>Positive feedback: {percent > 0 ? percent : 0}%</p>
      </>
  );
  }
};


export default App;
