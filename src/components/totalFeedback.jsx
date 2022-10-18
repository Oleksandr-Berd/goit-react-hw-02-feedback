import React from "react";

const TotalFeedback = ({good, neutral, bad}) =>
    <li className="statistic__item">Total: {good + neutral + bad }</li>;

export default TotalFeedback;

