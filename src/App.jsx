
import { Component } from 'react';
import Section from './conponents/section';
import Statistics from "./conponents/statistics";
import FeedbackOptions from "./conponents/feedbackOptions";
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
    
   handleIncrement = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };
  
  countTotalFeedback = () => (
    this.state.good + this.state.neutral + this.state.bad
  );

  countPositiveFeedbackPercentage = () => ((this.state.good * 100)/ this.countTotalFeedback()).toFixed(0);

  render() {

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.handleIncrement}/>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ?
            (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />)
            : ("No feedback given")
        }
        </Section>
      </>
  );
  }
};

export default App;
