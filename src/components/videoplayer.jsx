import React from 'react';
import styles from './videoplayer.module.css';

const  VideoPlayer = (props) => {
    
    const videoInfo = props.video;
    const videoId = props.currentVideo;
    const channelImg = props.channelImg;
    const src=`https://www.youtube.com/embed/${videoId}`;
    if(videoId===''){
        return (<div></div>)
    }
    return (
        <div className={styles.play}>
            {/* <div className={styles.videoPlay}> */}
                <iframe className={styles.iframe} id="ytplayer" title={videoInfo.snippet.title} type="text/html" 
                src={src}
                frameBorder="0"></iframe>
            {/* </div> */}
            
            <span className={styles.title}>{videoInfo.snippet.title}</span>
            <div className={styles.channelTitle}>
                <img className={styles.channelImg} src={channelImg} alt="channelthumbnail"></img>            
                <span>{videoInfo.snippet.channelTitle}</span>
            </div>
        </div>
    );
        
}

export default VideoPlayer;