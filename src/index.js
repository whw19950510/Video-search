import React,{Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import Searchbar from "./Component/Searchbar";
import Videolist from "./Component/Videolist";
import Videodetail from "./Component/Videodetail";
const API_KEY="AIzaSyB2fD6wJsRWly9lUCDaFT-RMyKPATH-cPI";

class App extends Component {
        constructor(props) {
            super(props);
            this.state= {
                videos:[],
                selectedVideo:null
            };
            this.videoSearch("Munich");
        }
        videoSearch=(term)=>{
            YTSearch({key:API_KEY,term:term},videos=>{
                this.setState({
                    videos:videos,
                    selectedVideo:videos[0]
                });
            });
        }
        /*call back function,equals a promise, continues execution unitl return */
        
        render(){
        const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300)
        return (
            <div>
                <Searchbar handleSearchTermChange={videoSearch}/>    {/*use state of this component to pass on*/}
                <Videodetail video={this.state.selectedVideo} />
                <Videolist handleVideoSelect={selectedVideo=>this.setState({selectedVideo:selectedVideo})} videos={this.state.videos}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,document.querySelector(".container")
)