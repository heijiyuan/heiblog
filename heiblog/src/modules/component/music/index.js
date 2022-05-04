import './index.css';
import { Drawer,message,Image,Spin} from 'antd';
import { connect } from "react-redux";
import {StepBackwardOutlined,StepForwardOutlined } from '@ant-design/icons';
import { useState } from 'react';
const MusiC = (props)=>{
    const {music,musicDispatch} = props
    const musics =music.tracks
    const [loading, changeloading] = useState(true);
    const onClose = () => {
      musicDispatch.savevisiable(false);
    };
    // const [Selected, setSelected] = useState(1);
    const TrackInfo = (item,index)=>{
       const {track} = item
       console.log(track)
          return(
          <div  >
      
                  <div className='trackInfo' key={index}>
                      <div className="name" style={{marginTop:"5px",textAlign:"center",fontWeight:'700' ,fontSize:'18px',color:'white'}}>{track.name}</div>
                      <div className="artist" style={{marginTop:"5px",textAlign:"center",fontWeight:'500' ,fontSize:'10px',color:'white'}}>{track.artists[0].name}</div>
                      <div className="album" style={{marginTop:"5px",textAlign:"center",fontWeight:'500' ,fontSize:'10px',color:'white'}}>{track.album.name}</div>          
                  </div>
          </div> 
          
          )
        
       }
    const Progress = ()=>{
      const handlenext =()=>{
        if(music.currentTrackIndex < music.currentTrackLen-1){
          musicDispatch.nextsing(music.currentTrackIndex)
        }else{
          message.info('这是最后一首歌')
        }
        
      }
      const handlelast =()=>{
        if(music.currentTrackIndex > 0){
          musicDispatch.lastsing(music.currentTrackIndex)
        }else{
          message.info('这是第一首歌')
        }
        
      }
     return (
      <div style={{display:"flex",justifyContent:"center" ,marginTop:"15px"}}>
        <div className='lastsing' onClick={()=>{handlelast()}}><StepBackwardOutlined  style={{height: 40,
      width: 40,
      borderRadius: 4,
      textAlign: 'center',
      color:"white",
      fontSize: 40,}}/></div>
        <div className='nextsing' onClick={()=>{handlenext()}}><StepForwardOutlined style={{height: 40,
      width: 40,
      borderRadius: 4,
      textAlign: 'center',
      color:"white",
      fontSize: 40,}}/></div>
      </div>
     )}
    const Pic = ()=>{
      return (
       <div  style={{display:"flex",justifyContent:"center",height:'200px'}} >
          <Spin tip="加载中..." delay={500} spinning={loading}>
             <Image
              width={200}
              style={{borderRadius:"20px"}}
              src={musics[music.currentTrackIndex].album.picUrl}
              placeholder={true}
              onLoad={()=>{changeloading(false)}}
              
              />
          </Spin> 
      </div>
      )}
    return(
      <Drawer
        title="放松一下吧！"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={music.visiable}
        style={{}}
        width="400px"
      >
        <div className="player" >
            {/* 播放器名称  */}
            <div className="Musiheaderc">音乐播放器</div>  
            {/* 图片  */}            
            <Pic />
            {/* 音乐信息  */}
            <TrackInfo track={musics[music.currentTrackIndex]} />
            {/* 音频控件  */}
            <audio id="audio" className='audio'  controls="controls" src={musics[music.currentTrackIndex].mp3Url}></audio>
            <Progress />
            {/* 前进后退 */}
        </div>
      </Drawer>
        
    )
}
const mapState = (state) => ({
    music: state.music,
  });
  
  const mapDispatch = (dispatch) => ({
    musicDispatch: dispatch.music
  });
  
  const Music  = connect(mapState, mapDispatch)(MusiC);


export default Music;