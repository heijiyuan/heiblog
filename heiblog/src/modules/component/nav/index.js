import { Link  } from "react-router-dom";
import { Menu ,Switch} from 'antd';
import { connect } from "react-redux";
import '../../../style/component.css';
const nav = (props)=>{
    const {select,navDispatch,navmode} = props
    // const [Selected, setSelected] = useState(1);
    const handclick = (e)=>{
        if(e.keyPath){
          navDispatch.setSelected(e.keyPath)
        }
        
    }
    function onChange(checked) {
      console.log(`switch to ${checked}`);
      if(checked===false){
        navDispatch.setmode("light")
      }else{
        navDispatch.setmode("dark")
      }
    }
    return(
      <div style={{position:"fixed",width:"100%",zIndex:100}}>
            <Menu 
             theme={navmode}
             mode="horizontal"
             className="menu"
             selectedKeys={select}
             onClick={handclick}>                  
            
               <span className="titlespan" >黑黑的网</span> 
                      
                <Menu.Item  className="mitem1" key="1"><Link to="/home">首页</Link></Menu.Item>
                <Menu.Item  className="mitem2" key="2"><Link to="/speak">杂谈</Link></Menu.Item>
                <Menu.Item  className="mitem3" key="3"><Link to="/about">关于我的</Link></Menu.Item>
                <Switch  className="switch" checkedChildren="亮色" unCheckedChildren="深色" defaultChecked onChange={onChange} /> 
                                       
            </Menu>
            
      </div>

    )
}
const mapState = (state) => ({
    select: state.common.select,
    navmode:state.common.navmode
  });
  
  const mapDispatch = (dispatch) => ({
    navDispatch: dispatch.common
  });
  
  const Nav = connect(mapState, mapDispatch)(nav);


export default Nav;