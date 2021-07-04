// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout,Timeline,BackTop} from 'antd';
import Nav from '../component/nav/index'
import './home.css';
import Swiper from '../component/swiper/index';
import { ArrowUpOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const home = (props) => {
    const {count} = props
    console.log(props.history.location.pathname);  
    const handleClick = () => {
        console.log('click ',props.history);
        props.history.push('./detail');
      };
    const configs = [
                      {
                        id:1,
                        text:"Create a services site 2015-09-01",
                        color:"blue"
                      },
                      {
                        id:2,
                        text:"Create a services site 2015-09-01",
                        color:"blue"
                      },
                      {
                        id:3,
                        text:"Create a services site 2015-09-01",
                        color:"green"
                      },
                      {
                        id:4,
                        text:"Create a services site 2015-09-01",
                        color:"green"
                      },
                      {
                        id:5,
                        text:"Create a services site 2015-09-01",
                        color:"red"
                      },
                      {
                        id:6,
                        text:"Create a services site 2015-09-01",
                        color:"red"
                      }
                     
                    ]
       const Items = (configs)=>{  
        return(
          configs.map((item,index)=>{
            return(
            <div  key={item.id}  style={{   width:'98vw'}}>
             <Timeline.Item color={item.color}>             
                 <div onClick={handleClick}  className='timeline'>{item.text}</div>         
             </Timeline.Item>
             </div>  
            )
            })
        )
      }
    const Timelines = ()=>{
      return(
      <Timeline mode="alternate">
         {Items(configs)}
      </Timeline>
      )      
    }
    const style ={
      height: 40,
      width: 40,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: '#1088e9',
      color: '#fff',
      textAlign: 'center',
      fontSize: 14,
    }
   return (
     <>
  <Layout style={{height:"200vh"}}>
     <Header  style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
       <Nav ></Nav>
     </Header>   
    <Content className="site-layout"  >
     <Swiper></Swiper> 
     <div style={{ marginTop: '100px' }}>
     <Timelines></Timelines>  
     </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
   <BackTop visibilityHeight={0}>
      <div style={style}><ArrowUpOutlined /></div>
   </BackTop>
    </>
   )
}

const mapState = (state) => ({
    count: state.home.count,
  });
  
  const mapDispatch = (dispatch) => ({
    homeDispatch: dispatch.home,
    navDispatch: dispatch.common
    //确保刷新之后导航栏标签不跑偏
  });
  
  const Home = connect(mapState, mapDispatch)(home);
  export default Home;