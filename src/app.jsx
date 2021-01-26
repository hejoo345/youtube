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
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const items = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDzWkk8lHi2vInxGquy-qiS07HskVezHQA", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result.items;
            // console.log(items.length);
        })
        .catch(error => console.log('error', error));

        this.setState({items,currentVideo:''});
        // console.log(this.state.items);
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

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const searchItems = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${item}&key=AIzaSyDzWkk8lHi2vInxGquy-qiS07HskVezHQA`, requestOptions)
      .then(response => response.json())
      .then(result => {
        return result.items;
      })
      .catch(error => console.log('error', error));
      this.setState({items : searchItems, currentVideo : ''});
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
      onVideoPlayer={this.handleViedoPlayer}/>
      </div>
      </>
    );
  }
}

export default App;
