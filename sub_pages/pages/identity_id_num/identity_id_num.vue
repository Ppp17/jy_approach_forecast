<template>
	<view>
		<uni-forms ref="idInfoForm" :rules="infoRules" :modelValue="idInfo">
			<!-- 身份证号 -->
			<uni-forms-item required label="身份证号" name="idNumber" :labelWidth="75">
				<view class="plateNum">
					<uni-easyinput v-model="idInfo.idNumber" placeholder="请输入身份证号" maxlength="18"/>
				</view>
			</uni-forms-item>
			<!-- 姓名 -->
			<uni-forms-item required label="姓名" name="idName" :labelWidth="75">
				<view class="plateNum">
					<uni-easyinput v-model="idInfo.idName" placeholder="请输入姓名" />
				</view>
			</uni-forms-item>
			<button @click="onSubmit">提交</button>
		</uni-forms>
	</view>
</template>

<script>
import {identityRealName} from 'api/index.js'

export default {
	data() {
		return {
			idInfo: {
				idName: '',
				idNumber: ''
			},
			infoRules: {
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
				},
				idName: {
					rules: [{
						required: true,
						errorMessage: '请输入姓名'
					}]
				}
			}
		};
	},
	methods: {
		onSubmit() {
			this.$refs.idInfoForm.validate().then(async res => {
				console.log('表单数据信息：', res);
				// res.idName res.idNumber
				const {data: result} = await identityRealName(res.idNumber,res.idName)
				console.log(result);
			}).catch(err => {
				console.log('表单错误信息：', err);
			})
			// console.log(this.idInfo);
		},
	}
}
</script>

<style lang="scss" scoped>
.plateNum {
	flex: 7;
	margin: 5px;
}
</style>
