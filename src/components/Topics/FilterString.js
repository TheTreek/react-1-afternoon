import React, { Component } from 'react';

class FilterString extends Component{

    constructor(){
        super();
        this.state = {
            unFilteredArray: ['James','Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterArray(val){
        this.setState({filteredArray: this.state.unFilteredArray.filter((el)=>el.includes(val))});
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={()=>this.filterArray(this.state.userInput)}/>
                <span className='resultsBox filterStringRB'>{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterString;