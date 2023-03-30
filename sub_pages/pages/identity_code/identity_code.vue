<template>
	<view>
		<view class="title">我的身份码</view>
		<view class="time">{{ time_now }}</view>
		<!-- 二维码 -->
		<view class="canvas-code">
			<view class="canvas-inside">
				<canvas canvas-id="qrcode" :style="'width:'+QRwidth +'px;height:' + QRwidth +'px'" />
			</view>
		</view>
	</view>
</template>

<script>
import uQRCode from 'untils/weapp-qrcode.js'
export default {
	data() {
		return {
			codeUrl: '',
			QRwidth: uni.getSystemInfoSync().windowWidth * 0.6,
			QRheight: uni.getSystemInfoSync().windowWidth * 0.6,
		};
	},
	onLoad(option) {
		console.log(option);
		this.codeUrl = `https://pass.jysc.sh.cn/Auth/${option.userNo}`
		this.qrFun()
	},
	methods: {

		//**生成二维码**//
		qrFun: function () {
			uQRCode.make({
				canvasId: 'qrcode',
				componentInstance: this,
				text: this.codeUrl,
				size: this.QRwidth,
				margin: 0,
				backgroundColor: '#ffffff',
				foregroundColor: '#000000',
				fileType: 'jpg',
				errorCorrectLevel: uQRCode.errorCorrectLevel.H,
				success: res => { }
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	display: flex;
	justify-content: center;
	font-size: 50px;
	margin-top: 100rpx;
}

.time {
	display: flex;
	justify-content: center;
	font-size: 30px;
	margin-top: 100rpx;
}

.canvas-code {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	/* z-index: 2; */
	/* background-color: pink; */

	height: 0;
	padding: 50% 0;

	/* border: 1px solid #0077ec; */
	.canvas-inside {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		width: 80%;
		height: 80%;
		background-color: #fff;
		/* 简洁的四角边框实现 */
		border-image-source: radial-gradient(65% 65%, transparent 0px, transparent 70%, #0077ec);
		border-image-slice: 3;
		border-width: 10px;
		border-style: solid;
		border-image-outset: 0cm;
		/*  */
		// border-radius: 10px;
		box-shadow:
			7.5px 7.5px 16.9px -4px rgba(0, 0, 0, 0.06),
			60px 60px 135px -4px rgba(0, 0, 0, 0.12);
	}
}
</style>
