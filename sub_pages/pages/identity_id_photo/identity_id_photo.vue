<template>
	<view class="container">
		<!-- 上传身份证 -->
		<view class="upload" @click="upLoadImg(1)">
			<image class="img" :src="tempFilePathFace ? tempFilePathFace : '/static/id_card.png'" mode="scaleToFill" />
			<view class="img_text">上传身份证人像面</view>
		</view>
		<view class="upload" @click="upLoadImg(2)">
			<image class="img" :src="tempFilePathNational ? tempFilePathNational : '/static/id_card.png'" mode="scaleToFill" />
			<view class="img_text">上传身份证国徽面</view>
		</view>
		<!-- 身份证号 -->
		<view class="input">
			<uni-easyinput v-model="idInfo.idNumber" placeholder="身份证号" disabled />
		</view>
		<!-- 姓名 -->
		<view class="input">
			<uni-easyinput v-model="idInfo.idName" placeholder="姓名" disabled />
		</view>
		<!-- 用户隐私协议 -->
		<view class="input" style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
			<uni-data-checkbox multiple v-model="userAgreement" :localdata="agreement"
				@change="changeAgreement"></uni-data-checkbox>
			<view @click="showPrivary" style="color:#e749b8">查看协议内容</view>
		</view>
		<button v-if="firstUpLoad" @click="onSubmit" style="width: 80vw;margin-top:2vh">提交</button>
		<button v-else @click="onSubmit" style="width: 80vw;margin-top:2vh">修改</button>
	</view>
</template>

<script>
import { upLoadPic, saveRealName } from 'api/index.js';
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
			// 是否第一次上传
			firstUpLoad: true,
			// 人面
			tempFilePathFace: '',
			// 国徽
			tempFilePathNational: '',
			idInfo: {
				userNo: '',
				idName: '',
				idNumber: '',
				addr: '',
				backFlag: false,
				faceFlag: false,
			},
		};
	},
	onLoad(options) {
		this.idInfo.userNo = options.userNo;
		if (options.userName) {
			this.idInfo.idName = options.userName;
			this.idInfo.idNumber = options.credNo;
			this.firstUpLoad = false
		}
		console.log(options);
	},
	methods: {
		changeAgreement(e) {
			console.log(e);
			console.log(e.detail.data.length);
			this.arrlength = e.detail.data.length
		},
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
		async upLoadImg(type) {
			if (type == 2 && this.idInfo.idNumber == '') {
				uni.showModal({
					title: '请先上传人像面',
					content: '',
					showCancel: true,
					success: ({ confirm, cancel }) => { }
				})
			} else {
				const res = await upLoadPic();
				// 获取图片地址
				if (type == 1) {
					this.tempFilePathFace = res.tempFilePaths[0];
				} else if (type == 2) {
					this.tempFilePathNational = res.tempFilePaths[0]
				}
				/* 
					todo
					 把图片地址 上传给ocr接口
				*/
				uni.uploadFile({
					url: 'https://pass.jysc.sh.cn/App/OCR',
					filePath: type == 1 ? this.tempFilePathFace : this.tempFilePathNational,
					name: type == 1 ? 'back' : ('front' + this.idInfo.idNumber),
					success: ({ statusCode, data: res }) => {

						try {
							if (statusCode == 200) {
								let result = JSON.parse(res)
								console.log(result);
								if (result.Code != 0) {
									switch (type) {
										case 1: this.tempFilePathFace = ''; break;
										case 2: this.tempFilePathNational = ''; break;
									}
									uni.showModal({
										title: 'Fail:' + result.Code,
										content: result.Message,
										showCancel: true,
										success: ({ confirm, cancel }) => { }
									})
								} else {
									if (type == 1) {
										this.idInfo.idName = result.Data.name;
										this.idInfo.idNumber = result.Data.credNo;
										this.idInfo.addr = result.Data.addr;
										this.idInfo.faceFlag = true;
										console.log(this.idInfo);
									} else if (type == 2) {
										this.idInfo.backFlag = true
									}

								}
							} else {
								switch (type) {
									case 1: this.tempFilePathFace = ''; break;
									case 2: this.tempFilePathNational = ''; break;
								}
								uni.showModal({
									title: 'Fail',
									content: '网络异常:'+statusCode,
									showCancel: true,
									success: ({ confirm, cancel }) => { }
								})
							}
						} catch (e) {
							console.log('出错了');
							uni.showModal({
								title: '出错了',
								content: e,
								showCancel: true,
								success: ({ confirm, cancel }) => { }
							})
						};
					},
					fail: (error) => {
						console.log(error);
					}
				})
			}
		},
		async onSubmit() {
			console.log(this.idInfo);
			if (this.arrlength == 1) {
				if (this.idInfo.faceFlag && this.idInfo.backFlag) {
					const { data: res } = await saveRealName(this.idInfo.userNo, this.idInfo.idNumber, this.idInfo.idName, this.idInfo.addr)
					console.log(res);
					if (res.Code == 0) {
						uni.showModal({
							title: '成功',
							content: res.Message,
							showCancel: true,
							success: ({ confirm, cancel }) => { }
						})
					} else {
						uni.showModal({
							title: 'Fail:'+res.Code,
							content: res.Message,
							showCancel: true,
							success: ({ confirm, cancel }) => { }
						})
					}

				} else {
					uni.showModal({
						title: '上传失败',
						content: '请上传所有图片',
						showCancel: true,
						success: ({ confirm, cancel }) => { }
					})
				}
			} else {
				uni.showModal({
					title: 'fail',
					content: '请先勾选用户协议',
				})
			}

		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.upload {
		width: 80vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #eee;
		border-radius: 20px;
		padding: 0 10px;
		box-shadow:
			6.7px 6.7px 5.3px rgba(0, 0, 0, 0.016),
			22.3px 22.3px 17.9px rgba(0, 0, 0, 0.024),
			100px 100px 80px rgba(0, 0, 0, 0.04);

		.img {
			width: 40vw;
			height: 20vh;
		}

		.img_text {
			margin-bottom: 20px;
			font-weight: 600;
			font-size: 30px;
			color: #76cce8
		}
	}

	.input {
		width: 80%;
		margin-top: 20px;
	}
}
</style>
