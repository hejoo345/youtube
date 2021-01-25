import React, { PureComponent } from 'react';
import styles from './video_item.module.css';

class VideoItem extends PureComponent {
    handleViedoPlayer = ()=>{
        this.props.onVideoPlayer(this.props.item);
    }
    render() {
        const {title, channelTitle} = this.props.item.snippet;
        const thumbnails = this.props.item.snippet.thumbnails.medium.url;
        console.log(this.props.item);
        return (
            <li className={styles.videoItem} onClick={this.handleViedoPlayer}>
                <div className={styles.img}><img src={thumbnails} alt="thumbnail"></img></div>
                <div className={styles.info}>
                    <span className={styles.title}>{title}</span>
                    <span className="channelTitle">{channelTitle}</span>
                </div>
            </li>
                
            
        );
    }
}

export default VideoItem;