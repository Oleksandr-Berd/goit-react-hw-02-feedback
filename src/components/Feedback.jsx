import React from "react";

export const Feedback = () => (
    <div>
        <div clasName = "feedback">
            <p>Please leave feedback</p>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
        </div> 
        <div className="statistic__feddback">
            <p>Statistics</p>
            <ul className="statistic__list">
                <li clasName ="statistic__item">Good: </li>
                <li clasName ="statistic__item">Neutral: </li>
                <li clasName ="statistic__item">Bad: </li>
            </ul>
        </div>
    </div>
    
)