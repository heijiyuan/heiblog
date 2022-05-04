
import {Timeline,Skeleton} from 'antd';


const Items = (list,handleClick,loading)=>{  
    return(
      list.map((item,index)=>{
        return(
        <div  key={item.noteid} >
          <Skeleton  active = {true} paragraph={{ rows: 1 }} title={{}} loading= {loading} >
              <Timeline.Item>             
                 <div   className='timeline' onClick={()=>handleClick(item)} style={{width:'100%',height:'30px'}}>{item.title}</div>         
             </Timeline.Item>
          </Skeleton>
         </div>  
        )
        })
    )
  }
const Tlines = (props)=>{
  const {list,handleClick,loading} = props
  return(
 <div style={{paddingTop:'50px' ,height:'500px',width:"100%",overflow:'auto',overflowX:'hidden'}} > 
          <Timeline mode="alternate" >
             {Items(list,handleClick,loading)}
          </Timeline>
  </div>    
  )      
}

export default  Tlines;