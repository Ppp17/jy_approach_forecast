<template>
	<view class="container">
		<view class="title">选择认证方式</view>
		<view class="btn_container">
			<button class="btn btn_1" hover-class="hover_btn_1" @click="identityByNum">
				<image src="@/static/edit_1.png" mode="scaleToFill" class="img" />
				<text>身份证号认证</text>
			</button>
			<button class="btn btn_2" hover-class="hover_btn_2" @click="identityByPhoto">
				<image src="@/static/take_photo.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">拍身份证认证</text>
			</button>

		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	methods: {
		// 身份证号认证
		identityByNum() {
			uni.navigateTo({ url: '/sub_pages/pages/identity_id_num/identity_id_num' });
		},
		// 拍身份证认证
		identityByPhoto() {
			uni.navigateTo({ url: '/sub_pages/pages/identity_id_photo/identity_id_photo' });
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #eee;
}

.title {
	font-size: 24px;
	font-weight: 600;
}

.btn_container {
	height: 50vh;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	// gap: 1vh;
	button::after {
		border: none;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60vw;
		height: 18vh;
		box-shadow:
			6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
			22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
			100px 100px 80px rgba(0, 0, 0, 0.07);

		.img {
			width: 80px;
			height: 80px;
		}

		text {
			color: #fff;
			font-weight: 600;
			font-size: 18px;
		}
	}

	.btn_1 {
		background-color: #79c667;
	}

	.hover_btn_1 {
		background-color: #90db7f;
	}

	.btn_2 {
		background-color: #f4d100;
	}

	.hover_btn_2 {
		background-color: #e7d672;
	}
}
</style>
