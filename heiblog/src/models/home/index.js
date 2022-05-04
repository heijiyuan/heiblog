import { get} from "../../utils/axios";

const home = {
    state: {
        count:1,
        loading:true,
        list: [
          {
            id:1,
            title:"Create a services site 2015-09-01",
            content:'111111111111111111111111',
            color:"blue"
          },
          {
            id:2,
            title:"Create a services site 2015-09-01",
            content:'111111111111111111111111',
            color:"blue"
          },
          {
            id:3,
            title:"Create a services site 2015-09-01",
            content:'111111111111111111111111',
            color:"green"
          },
          {
            id:4,
            title:"Create a services site 2015-09-01",
            content:'111111111111111111111111',
            color:"green"
          },
          {
            id:5,
            title:"Create a services site 2015-09-01",
            content:'111111111111111111111111',
            color:"red"
          },
          {
            id:6,
            title:"Create a services site 2015-09-01",
            content:'111111111111111111111111',
            color:"red"
          }
         
        ]
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      saveList(state, payload) {
        return {
          ...state,
          list:payload
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
      async getApproveList(payload, state) {
        const res = await get('blog/showlist',{
          id:1
        })   
        console.log(res) 
        if(res.code===200){
          this.saveList(res.data.content)
          this.changeloading(false)
        }  
         console.log(res)
    },
    }
  };
  export default home;