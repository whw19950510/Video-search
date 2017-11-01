import React,{Component} from "react";

class Videolistitem extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.props.video.snippet.thumbnails.default.url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.props.video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Videolistitem;