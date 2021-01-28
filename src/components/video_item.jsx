import React, { PureComponent } from 'react';
import styles from './video_item.module.css';

class VideoItem extends PureComponent {
    state = {
        channelImg: '',
    }
    
    handleViedoPlayer = ()=>{
        this.props.onVideoPlayer(this.props.item, this.state.channelImg);
    }
     
    render() {
        
        const {title, channelTitle, channelId} = this.props.item.snippet;
        const thumbnails = this.props.item.snippet.thumbnails.high.url;
        
        const displayType = this.props.display === 'list'? styles.list :styles.grid;
       
        this.props.youtube.callChannel(channelId)
        .then(result=>this.setState({channelImg:result[0].snippet.thumbnails.default.url }));
        return (
            <li className={`${styles.container} ${displayType}`} onClick={this.handleViedoPlayer}>
                <div className={styles.videoItem}>
                    <img className={styles.thumbnails} src={thumbnails} alt="thumbnail"></img>
                    <div className={styles.info}>
                    <img className={styles.channelImg} 
                    src={this.state.channelImg} alt="channelthumbnail"></img>
                        
                        <div className={styles.channelTitle}>
                            <span className={styles.title}>{title}</span>
                            <span>{channelTitle}</span>
                        </div>
                    </div>
                </div>
            </li>
                
            
        );
    }
}

export default VideoItem;