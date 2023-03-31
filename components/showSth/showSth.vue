<template>
	<view style="width: 100%;">
		<uni-card :is-shadow="false" margin="0">
			<uni-section title="预约记录" type="line">
				<template v-slot:right>
					<view @click="showAllAppo">查看全部</view>
				</template>
			</uni-section>

			<view class="appoData">
				<view v-if="appoData.length == 0" style="font-size: 20px;">暂无数据</view>
				<scroll-view v-else scroll-y style="height: 50vh;">
					<block v-for="(item) in appoData" :key="item.preNo">
						<appo_data :title="item.preNo" :appoType="item.dept" :date="item.preTime" @getPreNo="deleteAppoData">
						</appo_data>
					</block>
				</scroll-view>
			</view>
		</uni-card>
	</view>
</template>

<script>
import { getUserAppoData, deleteAppo, getDayAppoData } from 'api/index.js'
export default {
	name: "showSth",
	data() {
		return {
			openid: uni.getStorageSync('openid') || '',
			appoData: [],
			message: ''
		};
	},
	mounted() {
		this.onGetDayAppoData(this.openid);
	},
	methods: {
		// 获取用户预约信息
		async onGetUserAppoData(openid) {
			if (this.message == '已获取当日预报信息') {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				const { data: res } = await getUserAppoData(openid)
				this.appoData = res.Data
				this.message = res.Message
				console.log(res);
				uni.hideLoading()
			} else {
				uni.showToast({
					title: '已获取全部预报信息',
					icon: 'success',
					mask: true
				})
			}
		},

		// 获取用户当日预约信息
		async onGetDayAppoData(openid) {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			const { data: res } = await getDayAppoData(openid)
			this.appoData = res.Data
			this.message = res.Message
			console.log(res);
			uni.hideLoading()
		},

		// 查看全部预报
		showAllAppo() {
			this.onGetUserAppoData(this.openid);
		},

		// 删除用户预约信息
		deleteAppoData(preNo) {
			uni.showModal({
				title: '删除',
				content: '确认删除',
				showCancel: true,
				success: async ({ confirm, cancel }) => {
					if (confirm) {
						let index = this.appoData.findIndex(item => item.preNo === preNo)
						this.appoData.splice(index, 1)
						const { data: res } = await deleteAppo(preNo)
						console.log(res);
					}
				}
			})
		},
	}
}
</script>

<style lang="scss" scoped>
.appoData {
	height: 50vh;
		display: flex;
	justify-content: center;
	align-items: center;
 /*	height: 300px;
	background-color: pink; */
}
</style>