import React,{Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import Searchbar from "./Component/Searchbar";
import Videolist from "./Component/Videolist";
import Videodetail from "./Component/Videodetail";
const API_KEY="AIzaSyB2fD6wJsRWly9lUCDaFT-RMyKPATH-cPI";

class App extends Component{
        constructor(props) {
            super(props);
            this.state={videos:[]};
            YTSearch({key:API_KEY,term:"surfboards"},videos=>{
                this.setState({videos:videos});
                console.log(videos);
            });
        }
        render(){
        return (
            <div>
                <Searchbar />    {/*use state of this component to pass on*/}
                <Videodetail video={this.state.videos.map(video=>{return video})}/>
                <Videolist videos={this.state.videos}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,document.querySelector(".container")
)