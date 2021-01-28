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
        const thumbnails = this.props.item.snippet.thumbnails.medium.url;
        
        const displayType = this.props.display === 'list'? styles.list :styles.grid;

        // const callChannel = async()=>{
        //     const requestOptions = {
        //         method: 'GET',
        //         redirect: 'follow'
        //       };
              
        //       const result = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyDzWkk8lHi2vInxGquy-qiS07HskVezHQA`, requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             return result.items;
        //         })
        //         .catch(error => console.log('error', error));

        //         const channelImg = result[0].snippet.thumbnails.default.url;
        //         this.setState({channelImg});
        // }
       
        // callChannel();
        return (
            <li className={`${styles.container} ${displayType}`} onClick={this.handleViedoPlayer}>
                <div className={styles.videoItem}>
                    <img className={styles.thumbnails} src={thumbnails} alt="thumbnail"></img>
                    <div className={styles.info}>
                        <span className={styles.title}>{title}</span>
                        <div className={styles.channelTitle}>
                            <img className={styles.channelImg} src={this.state.channelImg} alt="channelthumbnail"></img>
                            <span>{channelTitle}</span>
                        </div>
                    </div>
                </div>
            </li>
                
            
        );
    }
}

export default VideoItem;