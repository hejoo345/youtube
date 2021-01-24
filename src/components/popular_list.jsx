import React, { Component } from 'react';
import Popular_ltem from './popular_item';

class Popular_list extends Component {
    state = {
        items: [],
    }
   async componentDidMount(){
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

            this.setState({items});
            // console.log(this.state.items);
    }
    render() {
        return (
            <ul>
                {
                    this.state.items.map((item)=>(
                        <Popular_ltem
                        key={item.id}
                        item={item}/>
                    ))
                }
            </ul>
        );
    }
}

export default Popular_list;