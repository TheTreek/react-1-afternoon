import React, {Component} from 'react';

class Sum extends Component{
    
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    handleNum1(val){
        this.setState({
            number1: parseInt(val)
        });
    }

    handleNum2(val){
        this.setState({
            number2: parseInt(val)
        });
    }

    findSum(val1,val2){
        this.setState({
            sum: val1+val2
        });
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>this.handleNum1(e.target.value)} type='number'/>
                <input className="inputLine" onChange={(e)=>this.handleNum2(e.target.value)} type='number'/>
                <button className="confirmationButton" onClick={()=>this.findSum(this.state.number1,this.state.number2)}></button>
        <span className="resultsBox">Result: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;