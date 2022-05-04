import { connect } from "react-redux";
import {CustomerServiceOutlined } from '@ant-design/icons';
const Icon = (props)=>{
    const {musicDispatch} = props
    const handleClick =()=>{
         
         musicDispatch.savevisiable(true)
    }
    return(
      <div className='icon_drawer'>
            <CustomerServiceOutlined  style={{fontSize: 40,}} onClick={()=>{handleClick()}} />
      </div>
    )
  }



  const mapState = (state) => ({
    
  });
  
  const mapDispatch = (dispatch) => ({
    musicDispatch: dispatch.music
    //确保刷新之后导航栏标签不跑偏
  });
  
  const Icons = connect(mapState, mapDispatch)(Icon);
  export default Icons;