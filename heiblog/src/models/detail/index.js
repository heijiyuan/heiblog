import { post } from "../../utils/axios";
const detail = {
    state: {
        select:['1'],
        loading:true,
        //用于不同的页面默认选择项目
        note:
        {
         id:'',
         content:''
        }

    }, // initial state
    reducers: {
      // handle state changes with pure functions
      savenote(state, payload) {
        return {
            ...state,
            note:payload
        }
      },
      changeloading(state, payload) {
        return {
            ...state,
            loading:payload
        }
      }
    },
    effects: {
      // handle state changes with impure functions.
      // use async/await for async actions
      async detailnote(payload, rootState) {
        const res = await post('blog/detailnote',
            payload
          )   
          console.log(res) 
          if(res.code===200){
            this.savenote(res.data.content)
            this.changeloading(false)
           //  this.savetotalnum(res.data.WholePageNum)
          }  
         //  else if(res.code===2){
         //    this.saveerror(res.message);
         //    this.changethevisibal(true)
         //  }   
           console.log(res)
      }
    }
  };
  export default detail;