class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){
      return  await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
          this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.items);
    }

    async search(query){
      return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items);
      
    }
}

export default Youtube;