# Youtube Clone
메인화면에서는 실시간 유튜브의 인기 동영상 리스트를 보여준다.
그 중 하나를 선택하면 해당 영상을 시청할 수 있다.
키워드를 검색하면 관련된 영상 리스트를 보여준다.

Class Component를 주로 사용하였고,
Youtube Data API를 사용하여 데이터를 가져왔다.

데모 링크 : https://hejoo345.github.io/youtube/

## Built With
- HTML
- PostCSS
- REACT.js

## Screen Shots
![main](https://user-images.githubusercontent.com/67685741/106119141-352d0c00-6198-11eb-82ad-f118ff4ecb36.png)

인기 동영상 리스트

![videoplayer](https://user-images.githubusercontent.com/67685741/106120950-568ef780-619a-11eb-93f6-fdf72a36cd21.png)

동영상 재생

![search](https://user-images.githubusercontent.com/67685741/106120960-5858bb00-619a-11eb-95f8-653c86ebe474.png)

검색 기능

![responsive](https://user-images.githubusercontent.com/67685741/106120963-5a227e80-619a-11eb-9be8-dd9ba9c97cb3.PNG)

반응형

## What I Learned
처음에 setState를 해도 리스트가 출력이 되질 않았는데 알고보니
fetch가 끝나지 않은 상황에서 setState를 해서 그런거였다.
그래서 async 로 선언해주고 await을 써서 값이 모두 넘어왔을 때 setState를 해주도록 설정했다.


     async mostPopular(){
  
      return  await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
          this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.items);
            
      }

처음에는 API KEY를 코드에 노출되도록 했지만 .env파일에 넣고 gitignore에 설정하여 노출을 방지하도록 했다.

    # API KEYs
    .env

채널 썸네일을 설정하고 싶었지만 동영상 아이템에서 바로 데이터를 얻을 수가 없었다.
그래서 channelId를 써서 한 번 더 API을 호출해주었다.
