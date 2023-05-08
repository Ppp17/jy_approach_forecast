<template>
	<view class="container">
		<!-- 个人信息 -->
		<user_info :name="userInfo.userName" :userNo="userNoNum"></user_info>
		<view class="btn_out">
			<!-- 功能区 -->
			<f-option :userNo="userInfo.userNo" :credNo="userInfo.credNo" :name="userInfo.userName"></f-option>
			<!-- 遮罩层 如果没有手机号则获取手机号 -->
			<!-- 			<block v-if="!phone">
				<button class="btn_in" plain open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button>
			</block> -->
		</view>

		<!-- <button class="btn" @click="navi">pkg_index</button> -->
	</view>
</template>

<!-- 本小程序的扫码跳转链接: https://pass.jysc.sh.cn/files/ -->
<script>
import { getUserOpenid, getUserInfoByOpenid ,getCustomerInfo} from 'api/index.js'
export default {
	data() {
		return {
			openid: uni.getStorageSync('openid') || '',
			// phone: uni.getStorageSync('phone') || '',
			/* 
				credNo: "362422200001170010"
				openid: "oEyDX4rmEX2_1kHz32tq986ey5ac"
				phone: ""
				userName: "钱宇轩"
				userNo: "PS00000002"
				ssh 上传，随便改点
			*/
			userInfo: {},
			// 省略userInfo.userNo后半段的0
			userNoNum: ''
		}
	},
	created() {
		if (this.openid === '') {
			// 获取openid
			this.getOpenid()
		} else {
			this.userOpenidGetInfo(this.openid);
		}
	},
	onReady() {

	},
	methods: {
		//getCus

		navi() {
			uni.navigateTo({
				url: '/sub_pages/pages/pkg_index/pkg_index'
			})
		},
		// 获取openid
		getOpenid() {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			// 登录微信获取openid
			uni.login({
				provider: 'weixin',
				success: async loginResult => {
					const res = await getUserOpenid(loginResult.code);
					console.log(res);
					if(res.data.Code==0){
						this.openid = res.data.Data.openid
					uni.setStorage({
						key: 'openid',
						data: res.data.Data.openid,
						success: (result) => {
							console.log(result);
						},
						fail: (error) => {}
					})
					this.userOpenidGetInfo(this.openid);
					}else {
						uni.showModal({
							title: 'Fail',
							content: res.data.Message,
							showCancel: true,
							success: ({ confirm, cancel }) => {
								uni.reLaunch({ url: '/pages/index/index' })
							}
						})
					}
					
					uni.hideLoading();
				},
				fail: (error) => {
					console.log(error);
				}
			})
		},
		// 获取用户信息
		async userOpenidGetInfo(openid) {
			const { data: res } = await getUserInfoByOpenid(openid)
			// console.log(res);
			this.userInfo = res.Data
			// this.name = res.Data.userNo
			this.userNoNum = parseInt(this.userInfo.userNo.split('PS')[1]);
		},

		// 老版本获取手机号 方法
		/* 		async getPhoneNumber(e) {
					console.log('点击了按钮');
					console.log(e);
					// 获取最新的openid
					let openid = uni.getStorageSync('openid')
					const { data: res } = await getUserPhone(openid, e);
					this.phone = uni.setStorageSync('phone', res.phone)
		
					// 刷新当前页面
					uni.redirectTo({ url: '/pages/index/index' })
				},
		
				async onGetUserInfo(pPhone){
					const {data:res} = await getUserInfo(pPhone);
					this.name = res.name;
					console.log(res);
				} */
	}
}
</script>

<style lang="scss" scoped>
.container {
	// padding: 10px;
	font-size: 14px;
	line-height: 24px;
	.btn_out {
		position: relative;

		.btn_in {
			position: absolute;
			width: 100%;
			height: 22vh;
			transform: translateY(-22vh);
		}

		.btn_in[plain] {
			border: 0;
		}
	}
}
</style>
