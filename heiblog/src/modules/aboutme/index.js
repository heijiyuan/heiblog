// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout,Image,Avatar,Tag,Divider } from 'antd';
import {
  WechatFilled,
  GithubOutlined
} from '@ant-design/icons';
import Nav from '../component/nav/index';
import Icon from '../component/icon/index';
import  { useEffect } from "react";
import Music from "../component/music";
import './aboutme.css'
const { Content, Footer,Sider } = Layout;
const  Aboutme = (props) => {
    const {count,setSelected,tags,aboutme} = props
    console.log(count,tags); 
    useEffect(()=>{
      setSelected(['3'])
    },[setSelected]) 
    
   

     const Right = (props) =>
     {
      let Tags = tags.map((item,index) => {
        return (
          <Tag key={index} color={item.color} style={{marginTop:"5px"}}>{item.ctx}</Tag>
        )
    })
        return(
          <div style={{backgroundColor:"white",display:"flex",alignItems:"center",width:"50%",height:"100%",borderRadius:"10px",marginTop:"12px",flexDirection:"column"}}>
            <div  style={{display:"flex",justifyContent:"center",height:'120px'}}>
               <Avatar src="https://pic.heiheiyun.top/me.jpg" size={120} style={{marginTop:"20px"}}></Avatar>
            </div>
             
            <h1 style={{textAlign:"center",fontWeight:600,marginTop:"20px"}} >黑纪源</h1>
            <div className="tag">
               {Tags}
            </div>

            <div style={{marginTop:"20px"}}>
               黑夜给了我黑色的眼睛，我却用它趋向光明~
            </div>
                <Divider>社交账号</Divider>
            <div className="two_code"> 
              
              <Image
                  width={160}
                  src="https://pic.heiheiyun.top/twoweima.jpg"
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
          <div className="backgroundaboutme" style={{backgroundColor:"white",display:"flex",justifyContent:"center",width:"70%",height:"90%",borderRadius:"10px",marginTop:"12px",marginLeft:"29%"}}>
             <article className="poem">{aboutme}</article>  
          </div>
        )
     }
   return (
<>    
  <Layout style={{height:"100vh"}} >
       <Nav  ></Nav>
       
     <Layout className="layout "  >
       <Content style={{width:"70vw"}}>
         <Left></Left> 
       </Content>
       <Sider className="right" width="35vw">
         <Right></Right>
       </Sider>
     </Layout>
    
    <Footer style={{ textAlign: 'center',height:"10vh" }} >
      
      <a  href='https://beian.miit.gov.cn'>豫ICP备2021011660号</a>
    </Footer>
  </Layout>
  <Icon></Icon>
  <Music></Music>
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