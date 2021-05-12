// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout} from 'antd';
import Nav from '../component/nav/index';
import  { useEffect } from "react";
const { Header, Content, Footer } = Layout;

const  Speak = (props) => {
      useEffect(()=>{
        setSelected(['2'])
      },[]) 
    const {count,setSelected} = props
    console.log(props.history.location.pathname); 
    const handleClick = e => {
        console.log('click ', e);
      };
   return (
    <Layout>
    <Header  style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
       <Nav ></Nav>
     </Header>   
    <Content className="site-layout" style={{ height:'90vh', marginTop: '10vh' }}>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
   )
}


const mapState = (state) => ({
    count: state.speak.count,
  });
  
  const mapDispatch = (dispatch) => ({
    setSelected: dispatch.common.setSelected
  });
  
  const Speaks = connect(mapState, mapDispatch)(Speak);


export default Speaks;