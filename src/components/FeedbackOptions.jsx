import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="buttonContainer">
    <button type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);


export default FeedbackOptions;


