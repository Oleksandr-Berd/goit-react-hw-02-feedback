import React from "react";

const CountPositiveFeedbackPercentage = ({good, neutral, bad}) =>

    <li className="statistic__item">Positive feedback: {good === 0 && neutral === 0 && bad === 0
        ? 0
        : (good / (good + bad + neutral) * 100).toFixed(2) + '%'}
        </li>

export default CountPositiveFeedbackPercentage;
