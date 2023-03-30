<template>
	<view>
		<uni-card :title="'预约编号:' + title" extra="删除" @click="delHandler()">
			<text>预约类型:{{ appoType }}\n</text>
			<!-- <text>预约手机号:{{ phone }}\n</text> -->
			<text>预约日期:{{ appoDay }}</text>
		</uni-card>
	</view>
</template>

<script>
export default {
	name: "appo_data",
	props: {
		title: {
			type: String,
			default: 'xxxxxxx'
		},
		appoType: {
			type: String,
			default: 'xx'
		},
		phone: {
			type: String,
			default: 'xxxxxxx'
		},
		date: {
			type: String,
			default: 'xx年xx月xx日'
		}
	},
	data() {
		return {
			stockType: '',
			appoDay: ''
		};
	},
	created() {

		this.appoDay = this.date.split(' ')[0];
	},
	methods: {
		delHandler(){
			this.$emit('getPreNo',this.title)
			// console.log(this.title);
		}
	}
}
</script>

<style lang="scss" scoped></style>