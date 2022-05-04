import { connect } from "react-redux";
import { useEffect } from "react";
import { Layout,Skeleton} from 'antd';
import Nav from '../component/nav/index';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import '../../style/markdown.css'
import Icon from '../component/icon/index'
const {  Content, Footer } = Layout;
const  Detail = (props) => {

    const {setSelected,detailDispatch,detailstate,loading} = props
    let arr = props.location.pathname.split("/");
    const noteid = arr[arr.length-1]
    console.log(noteid);
    // eslint-disable-next-line no-use-before-define
    useEffect(()=>{
      setSelected(['1']);
      detailDispatch.detailnote({
        noteid
      });
    },[detailDispatch, noteid, setSelected])
    console.log(detailstate.note.content)
    const note = detailstate.note.content;
     
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      highlight: function (code) {
              return hljs.highlightAuto(code).value;
      }
     
    }); 
  
  
    let html = marked(note) 

    // useEffect(()=>{
    //   detailDispatch.showdetail()
    // },[]) 
    
   
   return (
     <>
    <Layout>
       <Nav></Nav> 
          <Content className="site-layout" style={{marginTop:"50px"}}>
              <Skeleton active = {true} paragraph={{ rows: 20,width:"100%" }} title={{width:"100%"}} loading= {loading}  >  
                  <div className="markdown-body deTail" 
                     dangerouslySetInnerHTML={{__html:html}} >
                   </div>
              </Skeleton>    
          </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  <Icon ></Icon>
  </>
  )
}

const mapState = (state) => ({
  detailstate: state.detail,
  loading:state.detail.loading,
  });
  
  const mapDispatch = (dispatch) => ({
    detailDispatch: dispatch.detail,
    setSelected: dispatch.common.setSelected,
  });
  
  const Details = connect(mapState, mapDispatch)(Detail);

export default Details;