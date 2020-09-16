import React, { Component } from 'react';

class Palindrome extends Component{
    
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    checkPalindrome(val){
        this.setState({
            palindrome: (val === val.split('').reverse().join(''))
        });
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.checkPalindrome(this.state.userInput)}></button>
                <span className="resultsBox">Palindrome: { this.state.palindrome.toString() }</span>
            </div>
        );
    }
}

export default Palindrome;