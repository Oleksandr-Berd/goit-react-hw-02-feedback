import React from 'react';
import TotalFeedback from './totalFeedback';
import CountPositiveFeedbackPercentage from './countPositiveFeedbackPercentage';

const Statistics = ({good, neutral, bad}) => (
  <div className="statistic__feddback">
    <p className="textStatistic">Statistics</p>
    <ul className="statistic__list">
      <li className="statistic__item">Good: {good}</li>
      <li className="statistic__item">Neutral: {neutral}</li>
      <li className="statistic__item">Bad: {bad}</li>
      <TotalFeedback
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <CountPositiveFeedbackPercentage
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </ul>
  </div>
);

export default Statistics;