import React, { Component } from 'react';
import styles from './popular_item.module.css';

class Popular_ltem extends Component {
    
    render() {
        const {title, channelTitle} = this.props.item.snippet;
        const thumbnails = this.props.item.snippet.thumbnails.medium.url;
        console.log(this.props.item);
        return (
            <li className={styles.popularItem}>
                <div className="img"><img src={thumbnails}></img></div>
                <div className="info">
                    <span className="title">{title}</span>
                    <span className="channelTitle">{channelTitle}</span>
                </div>
            </li>
                
            
        );
    }
}

export default Popular_ltem;