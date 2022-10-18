import React from "react";

class Feedback extends React.Component{

   state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }

    handleIncrement = (evt) => {

        console.log(evt.target);
      

        this.setState((prevState) => {
            return {good: prevState.good + 1}
        })
    }

    render(){
    return  <div>
        <div className = "feedback">
            <p className = "text__feedback">Please leave feedback</p>
            <button type="button" data='good' onClick={this.handleIncrement}>Good</button>
            <button type="button" onClick={this.handleIncrement}>Neutral</button>
            <button type="button" onClick={this.handleIncrement}>Bad</button>
        </div> 
        <div className="statistic__feddback">
            <p className="textStatistic">Statistics</p>
            <ul className="statistic__list">
                <li className="statistic__item">Good: {this.state.good }</li>
                <li className ="statistic__item">Neutral: {this.state.neutral}</li>
                <li className ="statistic__item">Bad: {this.state.bad}</li>
            </ul>
        </div>
    </div>
    }
}

export default Feedback