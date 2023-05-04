<template>
	<uni-card :is-shadow="false">
		<view class="info">
			<view class="pic">
				<!-- <view class="head_pic"></view> -->
				<view class="name">用户:{{ name==''?'未实名用户':name }}</view>
			</view>
			<view class="userNo">
				<text style="font-size: 12px;">身份号:</text> {{ userNo=='' ? 'xxxxxxxx': userNo }}
			</view>
		</view>
	</uni-card>
</template>

<script>
export default {
	name: "user_info",
	props:{
		name:{
			type: String,
			default: '未注册用户'
		},
		userNo:{
			type: String,
			default: 'xxxxxxxxx'
		}
	},
	data() {
		return {

		};
	}
}
</script>

<style lang="scss" scoped>
.info {
	display: flex;
	justify-content: space-between;
	align-items: center;

	// padding: 0 5px;
	// height: 100px;
	// background-color: pink;
	.pic {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;

		.head_pic {
			background-color: blue;
			height: 50px;
			width: 50px;
			border-radius: 50%;
		}
		.name{
			margin-left: 1vw;
		}
	}

	.userNo {
		font-size: 18px;
	}
}
</style>