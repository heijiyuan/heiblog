import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout,BackTop,Spin} from 'antd';
import Nav from '../component/nav/index'
import './home.css';
import Swiper from '../component/swiper/index';
import Tlines from './timelines/index'
import {RocketTwoTone } from '@ant-design/icons';
import Icon from '../component/icon/index'
import Music from "../component/music";
const { Content, Footer } = Layout;

const Homer = (props) => {
    // eslint-disable-next-line no-unused-expressions
    const {list,setSelected, loading,homeDispatch,detailDispatch} = props
    useEffect(()=>{
      homeDispatch.getApproveList();
      setSelected(['1']);
    },[homeDispatch, setSelected])
   
    const handleClick = (item) => {
      props.history.push({pathname:'./detail/'+item.noteid,query:item});
      detailDispatch.savenote({content:item.content});
    };
     
    const style ={
      height: 40,
      width: 40,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: '#1088e9',
      color: 'red',
      textAlign: 'center',
      fontSize: 40,
    }
   return (
<div style={{width:'100vw'}}>
   <Layout >
       <Nav ></Nav>
       <Spin spinning={loading}  delay={300}>    
           <Content className="site-layout"  >
            <Swiper></Swiper> 
            <Tlines handleClick ={handleClick} list = {list} loading = {loading}></Tlines>  
           </Content>
        </Spin>   

    <Footer style={{ textAlign: 'center',height:"10vh" }}>
        <a  href='https://beian.miit.gov.cn'>豫ICP备2021011660号</a>
    </Footer> 
  </Layout>


   <BackTop visibilityHeight={0}>
      <div style={style}><RocketTwoTone /></div>
   </BackTop>
   <Music></Music>
   <Icon></Icon> 
</div>
   )
}

const mapState = (state) => ({
    list:state.home.list,
    loading:state.home.loading,
  });
  
  const mapDispatch = (dispatch) => ({
    homeDispatch: dispatch.home,
    detailDispatch: dispatch.detail,
    setSelected: dispatch.common.setSelected,
    //确保刷新之后导航栏标签不跑偏
  });
  
  const Home = connect(mapState, mapDispatch)(Homer);
  export default Home;