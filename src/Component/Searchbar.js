import React, {Component} from "react";
import ReactDOM from "react-dom";

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state={term:" "}
    }
    render(){
        return (
            <div>
            <input type="text" value={this.state.term} onChange={(event)=>this.setState({term:event.target.value})} />
            </div>
        )
    }
}

export default Searchbar;