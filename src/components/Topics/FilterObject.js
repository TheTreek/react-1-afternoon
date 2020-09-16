import React, { Component } from 'react';

class FilterObject extends Component{

    constructor(){
        super();
        this.state = {
            unFilteredArray: [{name: 'Jimmy Joe',title: 'Hack0r',age: 12,},{name: 'Jeremy Schrader',age: 24,hairColor: 'brown'},{name: 'Carly Armstrong',title: 'CEO',}],
            userInput: '',
            filteredArray: []
        }
    }

    filterArray(inp){
        this.setState({
            filteredArray: this.state.unFilteredArray.filter((el)=> inp in el)
        });
    }

    handleChange(val){
        this.setState({userInput: val.target.value});
    }

    render(){
        return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4> 
            <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={(e)=>this.handleChange(e)}/>
            <button className="confirmationButton" onClick={()=>this.filterArray(this.state.userInput)}></button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray,null,0) }</span>
        </div>
        );
    }
}
export default FilterObject;