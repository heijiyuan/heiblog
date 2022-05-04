import { get, post } from "../../utils/axios";
import { message} from 'antd';
const speak = {
    state: {
      comments: [{},{},{},{},{},{}],
      submitting: false,
      value: '',
      state:0,
      loading:true
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      changesubmitting(state, payload) {
        return {
          ...state,
          submitting:payload
        }
      },
      changevalue(state, payload) {
        return {
          ...state,
          value:payload
        }
      },
      saveList(state, payload) {
        return {
          ...state,
          comments:payload
        }
      },
      changeloading(state, payload) {
        return {
          ...state,
        
          loading:payload,
        }
      },
      changestate(state, payload) {
        return {
          ...state,
          state:state.state+1,
          value:'',
        }
     },
    },
    effects: {
      // handle state changes with impure functions.
      // use async/await for async actions
      async getApproveList(payload, state) {  
        const res = await get('blog/showcomment')   
        console.log(res) 
        if(res.code===200){
          this.saveList(res.data.content)
          this.changeloading(false)
        }  
         console.log(res)
    },
    async addcomment(payload, rootState) {
      const res =  await post('blog/addcomment',payload )
      this.changesubmitting(false)
      this.changestate()
      console.log(res)
      if(res.code === 200) {
        message.success(res.data.message);
        // this.saveinfo(res.data.info)
      }
      else {
        message.error(res.data.message);
      }
    },
    }
  };
  export default speak ;