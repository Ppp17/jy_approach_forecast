
import request from "untils/request";

// 获取openid
export function getUserOpenid(code) {
  return request({
    url: 'App/AuthOpenid',
    data: {
      code
    },
    method: 'post'
  })
}

// 根据openid获取用户信息
export function getUserInfoByOpenid(openid) {
  return request({
    url: 'User/GetUser',
    data: {
      openid
    },
    method: 'post'
  })
}

// 获取用户所有预报信息
export function getUserAppoData(openid) {
  return request({
    url: 'PreEntry/GetAll',
    data: {
      openid
    },
    method: 'post'
  })
}

// 获取当日预报信息
export function getDayAppoData(openid) {
  return request({
    url: 'PreEntry/GetDay',
    data: {
      openid
    },
    method: 'post'
  })
}

// 获取最近一条预报信息
export function getLastestAppoData(openid) {
  return request({
    url: 'PreEntry/GetLatest',
    data: {
      openid
    }
  })
}

// 上传照片
export function upLoadPic() {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // const tempFilePaths = res.tempFilePaths[0]
        resolve(res)

      },
      fail: (error) => {
        uni.showModal({
          title: '错误',
          content: error,
          showCancel: true
        })
      }
    })
  })
}

// 上传进货预报
export function upLoadAppoData(openid
  , dept
  , preType
  , viecleType
  , plateNo
  , supplier
  , variety
  , quantity
  , weight
  , source
  , stall
  , owner
  , preTime
  , crewCount
  , crews
  , batchNo) {
  return request({
    url: 'PreEntry/Add',
    data: {
      openid,
      dept,
      preType,
      viecleType,
      plateNo,
      supplier,
      variety,
      quantity,
      weight,
      source,
      stall,
      owner,
      preTime,
      crewCount,
      crews,
      batchNo
    },
    method: 'post'
  })

}

// 删除进货预报
export function deleteAppo(preNo) {
  return request({
    url: 'PreEntry/Delete',
    data: {
      preNo
    },
    methods: 'post'
  })
}

// 实名认证 身份证识别
export function ocrRealName(name) {
  return request({
    url: 'App/OCR',
    data: {
      name
    }
  })
}

// 实名认证 实名信息保存
export function saveRealName(userNo, credNo, name, addr) {
  return request({
    url: 'User/SaveRealName',
    data: {
      userNo,
      credNo,
      name,
      addr
    }
  })
}

// 获取验证码
export function codeMessage(phone) {
  return request({
    url: 'Local/SpecialOffer/SendSms',
    data: {
      phone
    }
  })
}

// 活动登记
export function eventRegister(phone, name, cred_no, openid, code) {
  return request({
    url: 'Local/SpecialOffer/SignUp',
    data: {
      phone, 
      name, 
      cred_no, 
      openid, 
      code,
    }
  })
}

/* 暂时弃用

// 获取手机号信息
export function getUserPhone(openid, e) {
  return request({
    url: 'vip02jb.fsp?proc=getUserBase',
    data: {
      openid: openid,
      code: e.detail.code
    },
    method: "post",
  })
}

// 根据手机号获取用户信息
export function getUserInfo(pPhone) {
  return request({
    url: 'vip03qb.fsp?proc=getUserVip',
    data: {
      phone: pPhone
    },
    method: "post"
  })
} */