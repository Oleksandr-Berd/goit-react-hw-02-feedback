import React from 'react';
import Statistics from './statistics';
import FeedbackOptions from './FeedbackOptions';
import StatisticsSection from './StatisicsSection';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    evt.target.textContent === 'Good' &&
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    evt.target.textContent === 'Neutral' &&
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    evt.target.textContent === 'Bad' &&
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
  };

  render() {
    return (
      <div>
        <StatisticsSection title={'Please leave feedback'} />
        <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
    );
  }
}

export default Feedback;
