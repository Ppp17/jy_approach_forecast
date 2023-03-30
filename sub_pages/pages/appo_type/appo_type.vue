<template>
	<view class="container">
		<uni-section title="预报类型" type="line"></uni-section>
		<view class="btn_container">
			<!-- 
				蔬菜进场预报
				果品进场预报
				肉类进场预报
				干货进场预报
				粮油进场预报
				冻品进场预报
				进口冷链进场预报   
			 -->
			<!-- 蔬菜进场预报 -->
			<button class="btn btn_1" hover-class="hover_btn_1" @click="getAppoType(1)">
				<image src="@/static/greens.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">蔬菜</text>
			</button>
			<!-- 果品进场预报 -->
			<button class="btn btn_2" hover-class="hover_btn_2" @click="getAppoType(2)">
				<image src="@/static/fruit.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">果品</text>
			</button>
			<!-- 肉类进场预报 -->
			<button class="btn btn_3" hover-class="hover_btn_3" @click="getAppoType(3)">
				<image src="@/static/meat.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">肉类</text>
			</button>
			<!-- 干货进场预报 -->
			<button class="btn btn_4" hover-class="hover_btn_4" @click="getAppoType(4)">
				<image src="@/static/seasoning.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">干货</text>
			</button>
			<!-- 粮油进场预报 -->
			<button class="btn btn_2" hover-class="hover_btn_2" @click="getAppoType(5)">
				<image src="@/static/oil.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">粮油</text>
			</button>
			<!-- 冻品进场预报 -->
			<button class="btn btn_5" hover-class="hover_btn_5" @click="getAppoType(6)">
				<image src="@/static/frozen_food.png" mode="scaleToFill" class="img" style="width: 60px;height: 60px;" />
				<text style="margin-left: 10px;">国产冻品</text>
			</button>
			<!-- 进口冷链进场预报 -->
			<button class="btn btn_6" hover-class="hover_btn_6" @click="getAppoType(7)">
				<image src="@/static/imported_food.png" mode="scaleToFill" class="img" style="width: 50px;height: 50px;" />
				<text style="margin-left: 10px;">进口冷链</text>
			</button>
			<!-- 占格子 -->
						<view class="empty" >
			</view>
		</view>
		<view style="margin-top: 10px">
			<showSth></showSth>
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
		// 选择预约食品类型
		getAppoType(num) {
			uni.navigateTo({ url: '/sub_pages/pages/appo/appo?type=' + num })
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	// display: flex;

	// width: 100vw;
	padding: 10px;
	// justify-content: center;

	.btn_container {
		// height: 50vh;
		margin-top: 2vh;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;
		// flex-direction: column;

		// gap: 1vh;
		button::after {
			border: none;
		}

		.btn {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 47%;
			padding: 0px;
			margin: 0;
			height: 10vh;
			box-shadow:
				6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
				22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
				100px 100px 80px rgba(0, 0, 0, 0.07);

			.img {
				width: 70px;
				height: 70px;
			}

			text {
				color: #fff;
				font-weight: 600;
				font-size: 15px;
			}
		}

		.empty {
			width: 45%;
			padding: 0;
			margin: 0;
			height: 10vh;
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

		.btn_3 {
			background-color: #faa637;
		}

		.hover_btn_3 {
			background-color: #f7c380
		}

		.btn_4 {
			background-color: #2fb682;
		}

		.hover_btn_4 {
			background-color: #6baa92;
		}

		.btn_5 {
			background-color: #a53bec;
		}

		.hover_btn_5 {
			background-color: #ba77e7;
		}

		.btn_6 {
			background-color: #534ad8;
		}

		.hover_btn_6 {
			background-color: #7872cf;
		}
	}
}
</style>
