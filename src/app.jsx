import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import VideoList from './components/video_list';
import VideoPlayer from './components/videoplayer';

class App extends Component {
  state = {
    items: [],
    videoInfo : [],
    currentVideo : '',
    channelImg: '',
  }
  callPopularList =async () =>{
    
    this.props.youtube.mostPopular()
    .then(result=>{
      this.setState({items:result, currentVideo:'' })
    })
  }

  componentDidMount(){
      this.callPopularList();
  }

  getVideoId = (video)=>{
    if(video.id.videoId) return video.id.videoId;
    return video.id;
  }

  handleViedoPlayer = async (video,img) =>{
    window.scrollTo(0,0);
    const videoId = await this.getVideoId(video);
    this.setState({videoInfo:video, currentVideo : videoId, channelImg : img});
  }

  handleSearch=async (item)=>{
    const searchItems = this.props.youtube;

    searchItems.search(item)
    .then(result => {
        this.setState({items : result, currentVideo : ''})
    });
  }

  goHome = () =>{
    window.location='/';
  }
  
  render(){
    return  (
      <>
      <Navbar
      onHome={this.goHome}
      onSearch={this.handleSearch}/>
      <div className="video">
      <VideoPlayer
      video={this.state.videoInfo}
      currentVideo={this.state.currentVideo}
      channelImg={this.state.channelImg}/>
      <VideoList
      items={this.state.items}
      onVideoPlayer={this.handleViedoPlayer}
      display={(this.state.currentVideo)?'list':'grid'}/>
      </div>
      </>
    );
  }
}

export default App;
