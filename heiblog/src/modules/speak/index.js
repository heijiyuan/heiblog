// import { useEffect } from "react";
import { connect } from "react-redux";
import { Layout} from 'antd';
import Nav from '../component/nav/index';
import Icon from '../component/icon/index';
import  { useEffect } from "react";
import { Comment, Avatar, Form, Button, List, Input,Skeleton,Spin } from 'antd';
import moment from 'moment';
import Music from "../component/music";
const { Content, Footer } = Layout;
const { TextArea } = Input;
const  Speak = (props) => {

  const {speak,setSelected,speakdispatch} = props

      useEffect(()=>{
        setSelected(['2']);
        speakdispatch.getApproveList()
      },[setSelected, speak.state, speakdispatch]) 
      
     
      const handleSubmit = () => {
        if (!speak.value) {
          return;
        }
    
        speakdispatch.changesubmitting(true)
         
    
        setTimeout(() => {
          const value = {
            content:speak.value,
            datetime:moment().format("YYYY/MM/DD HH:mm:ss")
          }
          console.log(value)
          speakdispatch.addcomment(value)
         
        }, 1000);
      };
    
      const  handleChange = e => {
        speakdispatch.changevalue(e.target.value);
        console.log(speak.value)
      }; 

      const CommentList = ( {comments} ) => {
        return(
              <List
              dataSource={comments}
              header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
              itemLayout="horizontal"
              renderItem={props =>
               <>
                  <Skeleton  active = {true} avatar ={true} loading= {speak.loading} >
                     <Comment {...props} />   
                  </Skeleton>
                </>

            }
              />  
      );}
      
      



   return (
  <div>
    <Layout>
       <Nav ></Nav>  
    <Content className="site-layout  backgroundspeak" >
      <Spin spinning={speak.loading}  delay={300}>
       <div  style={{marginTop:"100px",marginLeft:"15vw",marginRight:"15vw"}}> 
       <p className="vintage1" >请提出您宝贵的建议，注意文明言论哦~</p>
       
       <CommentList comments={speak.comments} />
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <>
                <Form.Item>
                      <TextArea rows={4} onChange={(e)=>{handleChange(e)}} value={speak.value} />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" loading={speak.submitting} onClick={()=>{handleSubmit()}} type="primary">
                    添加
                  </Button>
               </Form.Item>
          </>
          }
        />
      </div>
     </Spin> 
    </Content>
    <Footer style={{ textAlign: 'center',height:"10vh" }}>
        <a  href='https://beian.miit.gov.cn'>豫ICP备2021011660号</a>
    </Footer>
  </Layout>
  <Icon></Icon>
  <Music></Music>
  </div>
   )
}


const mapState = (state) => ({
    speak: state.speak,
  });
  
  const mapDispatch = (dispatch) => ({
    setSelected: dispatch.common.setSelected,
    speakdispatch: dispatch.speak
  });
  
  const Speaks = connect(mapState, mapDispatch)(Speak);


export default Speaks;