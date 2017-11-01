import React from "react";
import Videolistitem from "./Videolistitem";
const Videolist=(props)=>{
    const videoItems=(props.videos).map((video)=>{
        return <Videolistitem video={video} key={video.etag}/>
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}
export default Videolist;
