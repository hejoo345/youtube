import React from 'react';

const  VideoPlayer = (props) => {
    
    const videoInfo = props.video;
    const videoId = props.currentVideo;
    const src=`https://www.youtube.com/embed/${videoId}`;
    if(videoId===''){
        return (<div></div>)
    }
    return (
        <div>
            <iframe id="ytplayer" title={videoInfo.snippet.title} type="text/html" width="640" height="360"
            src={src}
            frameBorder="0"></iframe>
            <span>{videoInfo.snippet.title}</span>
            <span>{videoInfo.snippet.channelTitle}</span>
        </div>
    );
        
}

export default VideoPlayer;