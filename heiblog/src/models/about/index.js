const about = {
    state: {
        count:1,
        aboutme:`我本癫狂一小生，\n无心世故恋纷争。\n 天教散漫醉昏雪，\n地借清闲卧晚风。\n 冷眼不观名与利，\n虚怀懒对辱和荣。\n曾经多少红尘事，\n都付潇潇烟雨中。\n`,
        tags:[{ctx:"学生党",color:'orange'}
      ,{ctx:"上进",color:'red'}
      ,{ctx:"技术控",color:'blue'}
      ,{ctx:"打游戏",color:'orange'}
      ,{ctx:"旅行",color:'green'}
      ,{ctx:"读书",color:'orange'}
      ],
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      increment(state, payload) {
        return state + payload
      }
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
  export default about ;