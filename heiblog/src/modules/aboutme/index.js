// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout,Image,Avatar,Tag } from 'antd';
import {
  WechatFilled,
  GithubOutlined
} from '@ant-design/icons';
import Nav from '../component/nav/index';
import  { useEffect } from "react";
import './aboutme.css'
const { Header, Content, Footer,Sider } = Layout;
const  Aboutme = (props) => {
    const {count,setSelected,tags,aboutme} = props
    console.log(count,tags); 
    useEffect(()=>{
      setSelected(['3'])
    },[]) 
    
    const handleClick = e => {
        console.log('click ', e);
      };

const Right = (props) =>
     {
      let Tags = tags.map((item) => {
        return (
          <Tag color={item.color} style={{marginTop:"5px"}}>{item.ctx}</Tag>
        )
    })
        return(
          <div style={{backgroundColor:"white",display:"flex",alignItems:"center",width:"50%",height:"45%",borderRadius:"10px",marginTop:"12px",flexDirection:"column"}}>
            <Avatar src="http://pic.heiheiyun.top/me.jpg" size={120} style={{marginTop:"20px"}}></Avatar>
            <h1 style={{textAlign:"center",fontWeight:600,marginTop:"20px"}} >黑纪源</h1>
            <div className="tag">
               {Tags}
            </div>

            <div style={{marginTop:"20px"}}>
               这个人很懒,什么都没有留下~
            </div>
            <div className="two_code"> 
              
              <Image
                  width={160}
                  src="http://pic.heiheiyun.top/twoweima.jpg"
               />
               <WechatFilled />
               
               <section style={{marginTop:"20px"}}>
                <GithubOutlined />
                 <a href='https://github.com/heijiyuan'>https://github.com/heijiyuan</a>
               </section>
            </div>
          </div>

        )
     }
     const Left = (props) =>
     {
        return(
          <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",width:"70%",height:"90%",borderRadius:"10px",marginTop:"12px",marginLeft:"29%"}}>
             {aboutme}
          </div>
        )
     }
   return (
  <Layout style={{height:"200vh"}}>
    <Header   style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
       <Nav  ></Nav>
    </Header>   
     <Layout className="layout" >
       <Content style={{width:"70vw"}}>
         <Left></Left> 
       </Content>
       <Sider className="right" width="35vw">
         <Right></Right>
       </Sider>
     </Layout>
    
    <Footer style={{ textAlign: 'center',height:"10vh" }} >Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
   )
}

const mapState = (state) => ({
    count: state.about.count,
    tags:state.about.tags,
    aboutme:state.about.aboutme
  });
  
  const mapDispatch = (dispatch) => ({
    homeDispatch: dispatch.about,
    setSelected: dispatch.common.setSelected
  });
  
  const aboutme = connect(mapState, mapDispatch)(Aboutme);

export default aboutme;