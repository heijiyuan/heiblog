const music = {
    state: {
        count:1,
        tracks: [
            {
                "name": "起风了",
                "artists": [
                    {
                        "name": "买辣椒也用卷",
                    }
                ],
                "album": {
                    "name": "华语经典",
                    "picUrl": "https://pic.heiheiyun.top/fly.png",                    
                },
                "duration": 136829,
                "mp3Url": "https://pic.heiheiyun.top/qifengle.mp3"
            },
            {
                "name": "老男孩",
                "artists": [
                    {
                        "name": "筷子兄弟",
                    }
                ],
                "album": {
                    "name": "热门华语261",
                    "picUrl": "https://pic.heiheiyun.top/oldbrothermusic.png",
                },
                "duration": 109000,
                "mp3Url": "https://pic.heiheiyun.top/oldbrother.mp3"
            },
            {
                "name": "红玫瑰",
                "artists": [
                    {
                        "name": "陈奕迅",
                    }
                ],
                "album": {
                    "name": "热门华语234",
                    "picUrl": "https://pic.heiheiyun.top/redrosemusic.png",
                },
                "duration": 295575,
                "mp3Url": "https://pic.heiheiyun.top/redrose.mp3"
            }],
            currentTrackLen: 3, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            playStatus: true, //true为播放状态，false为暂停状态  
            visiable:false,     
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      increment(state, payload) {
        return state + payload
      },
      savevisiable(state, payload) {
          
        return {
            ...state,
            visiable:payload,
        }
      },
      nextsing(state, payload) {
        return {
            ...state,
            currentTrackIndex:payload+1,
        }
      },
      lastsing(state, payload) {
        return {
            ...state,
            currentTrackIndex:payload-1,
        }
      },
    },
    effects: {
      // handle state changes with impure functions.
      // use async/await for async actions
      async incrementAsync(payload, rootState) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.increment(payload)
      }
    }
  };
  export default music ;