<template>
	<view class="container">
		<uni-section title="优惠券领取" type="line">
		</uni-section>
		<uni-forms ref="idInfoForm" :rules="infoRules" :modelValue="idInfo">
			<!-- 姓名 -->
			<uni-forms-item required label="姓名" name="idName" :labelWidth="75">
				<view class="plateNum">
					<uni-easyinput v-model="idInfo.idName" placeholder="请输入姓名" />
				</view>
			</uni-forms-item>
			<!-- 身份证号 -->
<!-- 			<uni-forms-item required label="身份证号" name="idNumber" :labelWidth="75">
				<view class="plateNum">
					<uni-easyinput v-model="idInfo.idNumber" placeholder="请输入身份证号" maxlength="18" />
				</view>
			</uni-forms-item> -->
			<!-- 手机号 -->
			<uni-forms-item required label="手机号" name="phone" :labelWidth="75">
				<view class="plateNum">
					<uni-easyinput v-model="idInfo.phone" placeholder="请输入手机号" maxlength="11" />
				</view>
			</uni-forms-item>
			<!-- 验证码 -->
<!-- 			<uni-forms-item required label="验证码" name="code" :labelWidth="75">
				<view class="plateNum code">
					<view style="flex: 6">
						<uni-easyinput v-model="idInfo.code" placeholder="输入验证码" maxlength="11" />
					</view>
					<button class="btn" hover-class="btn_press_1" @click="getCode" :disabled="isDisabled">
						{{ codeBtn }}
					</button>
				</view>
			</uni-forms-item> -->

			<!-- 用户隐私协议 -->
<!-- 			<view class="input" style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
				<uni-data-checkbox multiple v-model="userAgreement" :localdata="agreement"
					@change="changeAgreement"></uni-data-checkbox>
				<view @click="showPrivary" style="color:#e749b8">查看协议内容</view>
			</view> -->

			<button @click="onSubmit">提交</button>
		</uni-forms>
	</view>
</template>

<script>
import { getUserOpenid, codeMessage, eventRegister } from 'api/index.js'

export default {
	data() {
		return {
			// 用户隐私协议
			userAgreement: [0],
			// 协议
			agreement: [{
				text: '我已同意并接受《用户服务协议》及《隐私政策》',
				value: 0
			}],
			// 协议数组长度
			arrlength: 1,

			openid: uni.getStorageSync('openid') || '',
			idInfo: {
				idName: '',
				// 身份证号
				idNumber: '',
				phone: '',
				// 验证码
				code: '',
			},
			// 验证码按钮
			codeBtn: '获取验证码',
			//
			isDisabled: false,
			infoRules: {
				/* 
					身份证
				idNumber: {
					rules: [{
						required: true,
						errorMessage: '请输入身份证号'
					},
					{
						minLength: 18,
						maxLength: 18,
						errorMessage: '身份证号长度位{maxLength}个字符',
					},
					{
						pattern: `^([1-6][1-9]|50)\\d{4}(18|19|20)\\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$`,
						errorMessage: '身份证格式错误'
					}
					]
				}, */
				idName: {
					rules: [{
						required: true,
						errorMessage: '请输入姓名'
					}]
				},
				phone: {
					rules: [{
						required: true,
						errorMessage: '请输入手机号'
					},
					{
						minLength: 11,
						maxLength: 11,
						errorMessage: '手机号长度位{maxLength}个字符',
					},
					{
						pattern: `^1[34578]\\d{9}$`,
						errorMessage: '手机号格式错误'
					},]
				},
				/* 				
				验证码
				code: {
					rules: [
						{
							required: true,
							errorMessage: '输入验证码',
						}
					]
				} */
			},
		};
	},
	created() {
		if (this.openid === '') {
			// 获取openid
			this.getOpenid()
		}
	},
	methods: {
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
					if (res.data.Code == 0) {
						this.openid = res.data.Data.openid
						uni.setStorage({
							key: 'openid',
							data: res.data.Data.openid,
							success: (result) => {
								console.log(result);
							},
							fail: (error) => { }
						})
					}
					/* 
						获取失败不提示,因为openid此页面没什么用
					*/
					/* else {
						uni.showModal({
							title: 'Fail',
							content: res.data.Message,
						})
					} */
					uni.hideLoading();
				},
				fail: (error) => {
					console.log(error);
					uni.hideLoading();
				}
			})
		},

		// 隐私协议
		showPrivary() {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			uni.downloadFile({
				url: 'https://pass.jysc.sh.cn/AppFiles/005newPrivacy.pdf',
				success: ({ tempFilePath, statusCode }) => {
					// console.log(tempFilePath);
					uni.openDocument({
						filePath: tempFilePath,
						success: (result) => {
							uni.hideLoading();
						},
						fail: (error) => {
							uni.hideLoading();
						}
					})
				},
				fail: (error) => {
					uni.hideLoading();
					uni.showModal({
						title: 'fail',
						content: error,
					})
				}
			})
		},
		// 隐私协议勾选
		changeAgreement(e) {
			console.log(e);
			console.log(e.detail.data.length);
			this.arrlength = e.detail.data.length
		},

		async onSubmit() {
			if(this.arrlength == 0){
				uni.showModal({
					title: '请先勾选协议',
					content: '',
				})
				return false ;
			}

			this.$refs.idInfoForm.validate().then(async res => {
				console.log('表单数据信息：', res);
				// res.idName res.idNumber
				const data = await eventRegister(
					this.idInfo.phone,
					this.idInfo.idName,
					'',
					this.openid,
					'',
				)
				console.log(data);
				if (data.statusCode === 200) {
					uni.showModal({
						title: data.data.message,
						content: '',
						showCancel: true,
						success: ({ confirm, cancel }) => { }
					})
					this.idInfo.phone = '';
					this.idInfo.idName = '';
					this.idInfo.idNumber = '';
					this.idInfo.code = '';
				} else {
					uni.showModal({
						title: '网络异常' + data.statusCode,
						content: '',
						showCancel: true,
					})
				}
			}).catch(err => {
				console.log('表单错误信息：', err);
			})
			// console.log(this.idInfo);
		},
		// 获取验证码
		async getCode() {
			uni.hideKeyboard();
			if (!(/^1[34578]\d{9}$/.test(this.idInfo.phone))) {
				uni.showToast({
					title: '手机号格式错误',
					icon: 'error',
					duration: 2000
				})
				return false
			}

			// 验证码倒计时事件
			let getTime = 60;
			this.isDisabled = true;

			var timer = setInterval(() => {
				if (getTime > 0) {
					getTime--;
					this.codeBtn = `重新获取(${getTime})`;
				} else {
					this.codeBtn = '获取验证码'
					this.isDisabled = false
					clearInterval(timer);
				}
				console.log('正在计时');
			}, 1000);
			// todo 验证码接口
			const { data: res } = await codeMessage(this.idInfo.phone)
			console.log(res);
			// const res = '验证码已发送';
			uni.showToast({
				title: res.message,
				icon: 'none',
				duration: 2000
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	padding: 0 20px;

	.plateNum {
		flex: 7;
		margin: 5px;
	}

	.code {
		display: flex;
	}

	.btn {
		flex: 3;
		height: 35px;
		padding: 0 2px;
		font-size: 14px;
		margin: 2px;
		background-color: #79c667;
		color: white;
	}

	.btn_press_1 {
		background-color: #90bd86;
		color: gray;
	}

}
</style>
