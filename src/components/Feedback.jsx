import React from "react";
import TotalFeedback from "./totalFeedback"

class Feedback extends React.Component{

   state = {
            good: 0,
            neutral: 0,
            bad: 0,
   }
    
    handleIncrement = (evt) => {
      
        evt.target.textContent === "Good" && this.setState((prevState) => {
            return {good: prevState.good + 1}
        })
        evt.target.textContent === "Neutral" && this.setState((prevState) => {
            return {neutral: prevState.neutral + 1}
        })  
        evt.target.textContent === "Bad" && this.setState((prevState) => {
            return {bad: prevState.bad + 1}
        })
    }   

    render(){
    return  <div>
        <div className = "feedback">
            <p className = "text__feedback">Please leave feedback</p>
            <button type="button" data="good" onClick={this.handleIncrement}>Good</button>
            <button type="button" onClick={this.handleIncrement}>Neutral</button>
            <button type="button" onClick={this.handleIncrement}>Bad</button>
        </div> 
        <div className="statistic__feddback">
            <p className="textStatistic">Statistics</p>
            <ul className="statistic__list">
                <li className="statistic__item">Good: {this.state.good }</li>
                <li className ="statistic__item">Neutral: {this.state.neutral}</li>
                <li className="statistic__item">Bad: {this.state.bad}</li>
                <TotalFeedback
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad} />
                <li className ="statistic__item">Positive feedback: {this.state.bad}</li>
            </ul>
        </div>
    </div>
    }
}

export default Feedback