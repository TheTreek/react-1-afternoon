import React, { Component } from 'react';

class EvenAndOdd extends Component{
    
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    doEvenOdds(inp){
        let arr = inp.split(',');
        let odds = arr.filter((el)=>{
            return !(el%2 === 0);
        });
        let evens = arr.filter((el)=>{
            return el % 2 === 0;
        });

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    handleChange(val){
        this.setState({userInput: val.target.value});
    }

    render(){
        return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(e)=>this.handleChange(e)}/>
            <button className="confirmationButton" onClick={ (e) => this.doEvenOdds(this.state.userInput)}></button>
        <span className="resultsBox">Evens: { this.state.evenArray.toString() }</span>
        <span className="resultsBox">Odds: { this.state.oddArray.toString() } </span>
        </div>
        );
    };
}

export default EvenAndOdd;