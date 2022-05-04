import axios from 'axios';


// const http = axios.create({

// })
axios.defaults.timeout = 30000;
axios.defaults.baseURL = "http://www.heiheiyun.top:7001/";
// axios.defaults.baseURL = "http://127.0.0.1:7001/";

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then((res) => {
      resolve(res.data)
    })
    .catch((error) => {
      reject(error);
    })
  })
}

export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
    .then((res) => {
      if(res.status === 200) { 
        resolve(res.data);
      } else{
        reject(res)
      }
      
    })
    .catch((error) => {
      reject(error);
      console.log(error);
    })
    
  })
}


