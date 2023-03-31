<template>
	<!-- <uni-card :is-shadow="false"> -->
	<view class="option">
		<view class="btn btn_1" hover-class="btn_press_1" @click="optionBtn(1)">
			<image src="/static/appo.png" mode="scaleToFill" class="img" />
			<text>进货预报</text>
		</view>
		<view class="btn btn_2" hover-class="btn_press_2" @click="optionBtn(2)">
			<image src="/static/real_name.png" mode="scaleToFill" class="img" style="width: 36px;height: 36px;" />
			<text>注册申请</text>
		</view>
		<view class="btn btn_3" hover-class="btn_press_3" @click="optionBtn(3)">
			<image src="/static/Lease.png" mode="scaleToFill" class="img" />
			<text>租赁查询</text>
		</view>
		<!-- <view class="btn btn_4" hover-class="btn_press_4" @click="optionBtn(4)">
			<image src="/static/translogo.png" mode="scaleToFill" class="img" />
			<text>江杨优选</text>
		</view> -->
		<view class="btn btn_4" hover-class="btn_press_4" @click="optionBtn(4)">
			<image src="/static/qrcode.png" mode="scaleToFill" class="img" />
			<text>亮身份码</text>
		</view>
	</view>
	<!-- </uni-card> -->
</template>

<script>
export default {
	name: "f-option",
	props: {
		userNo: {
			type: String,
			default: ''
		},
		credNo: {
			type: String,
			default: ''
		},
		name:{
			type: String,
			default: ''
		}
	},
	data() {
		return {
			optionBtn(btn) {
				switch (btn) {
					case 1:
						uni.navigateTo({ url: '/sub_pages/pages/appo_type/appo_type' });
						break;
					case 2:
						uni.navigateTo({ url: `/sub_pages/pages/identity_id_photo/identity_id_photo?userNo=${this.userNo}&userName=${this.name}&credNo=${this.credNo}` });
						break;
					case 3:
						uni.showModal({
							title: '待开发',
							content: '请等待版本更新',
							showCancel: true,
							success: ({ confirm, cancel }) => { }
						})
						// uni.navigateTo({ url: '/sub_pages/pages/lease/lease' });
						break;
					case 4:
						/* uni.navigateToMiniProgram({
							appId: 'wx7145322107ed8807',
						}) */

						if (this.credNo) {
							uni.navigateTo({ url: `/sub_pages/pages/identity_code/identity_code?userNo=${this.userNo}` })
						} else {
							uni.showModal({
								title: '请先注册申请',
								content: '',
								showCancel: true,
								success: ({ confirm, cancel }) => {}
							})
						}
						break;
				}
			}
		};
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
.option {
	// margin: 10px;
	display: flex;
	// justify-content: space-around;
	flex-wrap: wrap;
	gap: 1vh;
	justify-content: center;
	align-items: center;
	height: 22vh;

	// background-color: pink;
	// padding: 0 10px;
	.btn {
		height: 10vh;
		width: 45%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: rgb(65, 182, 236);
		color: white;
		border-radius: 10px;

		.img {
			// vertical-align:middle​;
			width: 40px;
			height: 40px;
		}

		text {
			font-size: 3vh;
			font-family: "Microsoft YaHei";
			font-weight: 600;
		}
	}

	.btn_1 {
		background-color: #79c667;
	}

	.btn_press_1 {
		background-color: #90bd86;
	}

	.btn_2 {
		background-color: #76cce8;
	}

	.btn_press_2 {
		background-color: #9cc9d8;
	}

	.btn_3 {
		background-color: #f4d100;
	}

	.btn_press_3 {
		background-color: #e6d67e;
	}

	.btn_4 {
		background-color: #4ca9e7;
	}

	.btn_press_4 {
		background-color: #77a3c0;
	}
}
</style>