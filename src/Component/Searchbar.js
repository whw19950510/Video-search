import React, {Component} from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state={term:" "}
    }
    onInputChange=(term)=>{
        this.setState({term:event.target.value})
        this.props.handleSearchTermChange(term);
    }
    render(){
        
        return (
            <div className="search-bar">
                <input type="text" value={this.state.term} onChange={(event)=>this.onInputChange(event.target.value)}/>
            </div>
        )
    }
}

export default Searchbar;