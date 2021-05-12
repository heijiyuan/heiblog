import { Carousel } from 'antd';
import configs from './config'
const swiper = ()=>{
    const Map = (configs)=>{  
      return(
        configs.map((item,index)=>{
          return(
           <div key={item.id}>
             <div style={item.style} >
               <h3 style={{textAlign:'center',fontSize:'40px',color:'white',fontWeight:'600',fontFamily:'KaiTi'}}>{item.text}</h3>
              </div>
           </div>
          )
          })
      )
    }
    return(
        <Carousel autoplay effect="fade">
          {Map(configs)}
        </Carousel>
      )
}



export default swiper;