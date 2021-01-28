import React, { Component } from 'react';
import VideoItem from './video_item';
import styles from './video_list.module.css';

class VideoList extends Component {
    render() {
        return (
            <ul className={styles.videoList}>
                {
                    this.props.items.map((item)=>(
                        <VideoItem        
                        youtube={this.props.youtube}             
                        key={item.etag}
                        item={item}
                        onVideoPlayer={this.props.onVideoPlayer}
                        display={this.props.display}/>
                    ))
                }
            </ul>
        );
    }
}

export default VideoList;