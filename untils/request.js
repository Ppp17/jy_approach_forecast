const BASE_URL = 'https://pass.jysc.sh.cn/';

function request({url, data,method}){
  return new Promise((resolve,reject)=>{
    uni.request({
      url: BASE_URL + url,
      method: method? method :'POST',
      data,
      header:{
        "Content-Type": "application/json"
      },
      success: res =>{
        if(res.data){
          resolve(res)
        } else {
          uni.showToast({
            title: res.data,
          })
          reject(res.data)
        }
      },
      fail: err =>{
        reject(err)
      }
    })
  })
}


export default request