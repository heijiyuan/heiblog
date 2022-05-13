import { Image,Avatar,Tag,Divider } from 'antd';
import {
  WechatFilled,
  GithubOutlined
} from '@ant-design/icons';

const Right = (props) =>
     {
      let Tags = props.tags.map((item,index) => {
        return (
          <Tag key={index} color={item.color} style={{marginTop:"5px"}}>{item.ctx}</Tag>
        )
    })
        return(
          <div className='right' >
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
                  width="100px"
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

export default Right