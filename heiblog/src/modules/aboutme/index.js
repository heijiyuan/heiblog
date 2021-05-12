// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout,Breadcrumb,Menu } from 'antd';
import Nav from '../component/nav/index';
import  { useEffect } from "react";
const { Header, Content, Footer } = Layout;
const  Aboutme = (props) => {
    const {count,setSelected} = props
    console.log(count); 
    useEffect(()=>{
      setSelected(['3'])
    },[]) 
    
    const handleClick = e => {
        console.log('click ', e);
      };
   return (
    <Layout>
    <Header  style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
       <Nav  ></Nav>
     </Header>   
    <Content className="site-layout" >
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
   )
}

const mapState = (state) => ({
    count: state.about.count,
  });
  
  const mapDispatch = (dispatch) => ({
    homeDispatch: dispatch.about,
    setSelected: dispatch.common.setSelected
  });
  
  const aboutme = connect(mapState, mapDispatch)(Aboutme);

export default aboutme;