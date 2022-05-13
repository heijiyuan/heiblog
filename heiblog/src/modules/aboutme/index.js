import { connect } from "react-redux";
import { Layout} from 'antd';
import Nav from '../component/nav/index';
import  { useEffect } from "react";
import './aboutme.css'
import Right from "./rigth";
import Left from "./left"
const { Content, Footer,Sider } = Layout;
const  Aboutme = (props) => {
    const {count,setSelected,tags,aboutme} = props
    console.log(count,tags); 
    useEffect(()=>{
      setSelected(['3'])
    },[setSelected]) 
   return (
<>    
  <Layout className="layout">
       <Nav></Nav> 
     <Layout className="layout_top"  >
       <Content className="leftcontent">
         <Left aboutme={aboutme} ></Left> 
       </Content>
       <Sider className="rightcontent" >
         <Right tags={tags}></Right>
       </Sider>
     </Layout>  
    <Footer style={{ textAlign: 'center',height:"10vh" }} >  
      <a  href='https://beian.miit.gov.cn'>豫ICP备2021011660号</a>
    </Footer>
    </Layout>
</>
   )
}

const mapState = (state) => ({
    count: state.about.count,
    tags:state.about.tags,
    aboutme:state.about.aboutme
  });
  
  const mapDispatch = (dispatch) => ({
    setSelected: dispatch.common.setSelected
  });
  
  const aboutme = connect(mapState, mapDispatch)(Aboutme);

export default aboutme;