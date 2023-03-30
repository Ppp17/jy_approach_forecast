<template>
	<view>
		<view style="padding: 10px;">
			<view class="two_btn">
				<button class="btn_submit_1" hover-class="btn_press_submit_1" @click="onGetLastestAppoData">获取最近一条数据</button>
				<button class="btn_submit_2" hover-class="btn_press_submit_2" @click="resetData">重置</button>
			</view>
			<uni-forms ref="form" :rules="rules" :modelValue="appoFordata">
				<!-- 类型选择 -->
				<!-- 			<uni-forms-item required label="进货类型" name="stockType" :labelWidth="75">
				<view class="plateNum">
					<uni-easyinput v-model="stockType" disabled />
				</view>
			</uni-forms-item> -->
				<!-- 车辆类型 -->
				<uni-section title="载货车辆">
					<template v-slot:decoration>
						<view class="decoration"></view>
					</template>
				</uni-section>
				<uni-forms-item required label="车辆类型" name="carType" :labelWidth="75">
					<view style="height: 100%;;display: flex;align-items: center;">
						<uni-data-checkbox v-model="carValue" :localdata="carRange"></uni-data-checkbox>
					</view>
				</uni-forms-item>

				<!-- 动态表单: 车辆、供应商、品名 -->
				<!-- 车牌 -->
				<uni-forms-item v-if="carValue === 0" label="车牌" name="plateNum" :labelWidth="75">
					<view class="plate">
						<!-- 车牌地名 -->
						<view class="plateTitle">
							<!-- <uni-card :is-shadow="false" margin="0" padding="5" spacing="0" @click="openPlateTitle"> -->
							<view
								style="display: flex;height: 100%;align-items: center;justify-content: center;border: 1px solid rgb(172, 172, 172);border-radius: 5px;"
								@click="openPlateTitle">
								{{ plateTitle }}
							</view>
							<!-- </uni-card> -->
							<!-- 车牌键盘弹出层 -->
							<uni-popup ref="popup" type="bottom" before-close :duration="0" background-color="#eee"
								mask-background-color="rgba(0,0,0,0)">
								<scroll-view scroll-y>
									<view class="plate_choose">
										<view @click="choosePlate(item)" class="title" hover-class="press_title"
											v-for="(item, index) in platePlace" :key="index">{{ item }}</view>
									</view>
								</scroll-view>
							</uni-popup>
						</view>
						<!-- 车牌具体内容 -->
						<view class="plateNum">
							<uni-easyinput class="uni-mt-5" trim="all" v-model="plateNum" placeholder="请输入车牌"
								maxlength="6"></uni-easyinput>
						</view>
						<view class="add">
							<button class="btn" hover-class="press_btn" @click="addPlate" type="primary" plain="true"
								size="mini">新增</button>
						</view>
					</view>
				</uni-forms-item>
				<!-- 车牌tag -->
				<view class="tag">
					<view v-for="(item, index) in plateArray" :key="index">
						<view class="tag_item">
							<view>{{ item }}</view>
							<image src="/static/del_xx.png" mode="scaleToFill" class="img" @click="delTag(item)" />
						</view>
					</view>
				</view>

				<view style="margin-bottom: 3vh;">
					<uni-section title="商品详情">
						<template v-slot:decoration>
							<view class="decoration"></view>
						</template>
					</uni-section>
				</view>

				<!-- 品名 -->
				<uni-forms-item label="品名" name="plateNum" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="appoForData.brandName" placeholder="请输入品名"></uni-easyinput>
					</view>
				</uni-forms-item>
				<!-- 数量 -->
				<uni-forms-item label="数量(件)" v-if="stockType == '肉类' || stockType == '国产冻品' || stockType == '进口冷链'"
					name="goodsNum" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="appoForData.goodsNum" placeholder="请输入数量(件)" type="number" />
					</view>
				</uni-forms-item>
				<!-- 重量 -->
				<uni-forms-item label="重量(kg)"
					v-if="stockType == '蔬菜' || stockType == '肉类' || stockType == '国产冻品' || stockType == '进口冷链' || stockType == '果品'"
					name="goodsWeight" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="appoForData.goodsWeight" placeholder="请输入重量(kg)" type="number" />
					</view>
				</uni-forms-item>
				<view class="add">
					<button class="btn" hover-class="press_btn" @click="addBrandName" type="primary" plain="true"
						size="mini">新增商品</button>
				</view>


				<!-- 商品tag -->
				<view class="tag">
					<view v-for="(item, index) in brandNameArray" :key="index">
						<view class="tag_item">
							<view class="item_info">{{ item.brandName }}</view>
							<view class="item_info" v-if="item.goodsNum">{{ item.goodsNum }}个</view>
							<view class="item_info" v-if="item.goodsWeight">{{ item.goodsWeight }}kg</view>
							<image src="/static/del_xx.png" mode="scaleToFill" class="img" @click="delBrandTag(item)" />
						</view>
					</view>
				</view>

				<!-- 来源地 -->
				<uni-forms-item label="来源地" v-if="stockType != '肉类'" name="placeFrom" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="placeFrom" placeholder="来源地" />
					</view>
				</uni-forms-item>

				<!-- 供货商 -->
				<uni-forms-item v-if="stockType == '肉类' || stockType == '国产冻品' || stockType == '进口冷链'" label="供货商" name="plateNum"
					:labelWidth="75">
					<view class="plate">
						<view class="plateNum" style="margin-left: 0">
							<uni-easyinput v-model="appoForData.supplier" placeholder="请输入供应商"></uni-easyinput>
						</view>
						<view class="add">
							<button class="btn" hover-class="press_btn" @click="addSupplier" type="primary" plain="true"
								size="mini">新增</button>
						</view>
					</view>
				</uni-forms-item>


				<!-- 供货商tag -->
				<view class="tag">
					<view v-for="(item, index) in supplierArray" :key="index">
						<view class="tag_item">
							<view class="item_info">{{ item }}</view>
							<image src="/static/del_xx.png" mode="scaleToFill" class="img" @click="delSupplier(item)" />
						</view>
					</view>
				</view>

				<!-- 进货席位 -->
				<uni-forms-item label="进货席位" v-if="stockType != '肉类'" name="stockPlace" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="stockPlace" placeholder="进货席位" />
					</view>
				</uni-forms-item>

				<!-- 货主姓名 -->
				<uni-forms-item v-if="stockType == '蔬菜' || stockType == '肉类'" label="货主姓名" name="stockPlace" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="stockName" placeholder="货主姓名" />
					</view>
				</uni-forms-item>

				<!-- 批号 -->
				<uni-forms-item v-if="stockType == '进口冷链'" label="批号" name="lotNum" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="lotNum" placeholder="请输入批号" maxlength="30" />
					</view>
				</uni-forms-item>
				<!-- 进场时间 -->
				<uni-forms-item label="选择时间" name="date" :labelWidth="75">
					<picker class="date-select" mode="multiSelector" :range="dateRangeChosen" :value="dateValue"
						@columnchange="dateChange">
						<view>
							{{ dateRangeChosen[0][firstDateChoosenIndex] }},{{ dateRangeChosen[1][secondDateChoosenIndex]
							}} - {{ dateRangeChosen[2][thirdDateChoosenIndex] }}
						</view>
					</picker>
				</uni-forms-item>

				<!-- 随车人数 -->
				<uni-forms-item label="随车人数" name="appoPeople" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="appoPeople" placeholder="请输入随车人数" type="number" maxlength="1"/>
					</view>
				</uni-forms-item>

				<!-- 随车人员登记 -->
				<!-- <uni-forms-item required label="随车人员" name="entourage" :labelWidth="75"> -->
				<view class="section">
					<uni-section title="随车人员" type="line">
						<template v-slot:decoration>
							<view class="decoration"></view>
						</template>
					</uni-section>
				</view>
				<!-- 姓名 -->
				<uni-forms-item label="姓名" name="plateNum" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput class="uni-mt-5" trim="all" v-model="entourageName" placeholder="请输入姓名"
							maxlength="10"></uni-easyinput>
					</view>
				</uni-forms-item>
				<!-- 手机号 -->
				<uni-forms-item label="手机号" name="goodsNum" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="entouragePhone" placeholder="请输入手机号" type="number" maxlength="11" />
					</view>
				</uni-forms-item>
				<!-- 身份证 -->
				<uni-forms-item label="身份证" name="idCard" :labelWidth="75">
					<view class="plateNum">
						<uni-easyinput v-model="entourageIdCard" placeholder="请输入身份证" type="idcard" maxlength="18" />
					</view>
				</uni-forms-item>
				<view class="add">
					<button class="btn" hover-class="press_btn" @click="addEntourage" type="primary" plain="true"
						size="mini">新增人员</button>
				</view>


				<!-- 随行人员tag渲染 -->
				<view class="tag">
					<view v-for="(item, index) in entourageData" :key="index">
						<view class="tag_item">
							<view class="item_info">{{ item.name }}</view>
							<view class="item_info">{{ item.phone }}</view>
							<view class="item_info">{{ item.idCard }}</view>
							<image src="/static/del_xx.png" mode="scaleToFill" class="img" @click="delEntourage(item.id)" />
						</view>
					</view>
				</view>

				<!-- </uni-forms-item> -->
				<button @click="onSubmit" class="btn_submit" hover-class="btn_press_submit">提交</button>

			</uni-forms>
		</view>
	</view>
</template>

<script>
import { upLoadAppoData, getLastestAppoData } from 'api/index.js'
export default {
	data() {
		return {
			// openid
			openid: uni.getStorageSync('openid') || '',
			// 时间选择
			dateValue: 0,
			// 时间备份
			dateRange: [
				[],
				[
					'00:00', '01:00', '02:00',
					'03:00', '04:00', '05:00',
					'06:00', '07:00', '08:00',
					'09:00', '10:00', '11:00',
					'12:00', '13:00', '14:00',
					'15:00', '16:00', '17:00',
					'18:00', '19:00', '20:00',
					'21:00', '22:00', '23:00',
				],
				[
					'01:00', '02:00', '03:00',
					'04:00', '05:00', '06:00',
					'07:00', '08:00', '09:00',
					'10:00', '11:00', '12:00',
					'13:00', '14:00', '15:00',
					'16:00', '17:00', '18:00',
					'19:00', '20:00', '21:00',
					'22:00', '23:00', '24:00'
				],
			],
			// 可供选择的时间
			dateRangeChosen: [[], [], []],
			// 专门存放今日的时间
			dateTodayData: [
				'00:00', '01:00', '02:00',
				'03:00', '04:00', '05:00',
				'06:00', '07:00', '08:00',
				'09:00', '10:00', '11:00',
				'12:00', '13:00', '14:00',
				'15:00', '16:00', '17:00',
				'18:00', '19:00', '20:00',
				'21:00', '22:00', '23:00',
			],
			firstDateChoosenIndex: 0,
			secondDateChoosenIndex: 0,
			thirdDateChoosenIndex: 0,
			// 最后记录的时间
			selectDate: '',
			// 进货类型
			stockType: '',
			// 冻品是否国产 
			stockAppoType: '',
			stockRange: [
				{ value: 1, text: "篮球" },
				{ value: 2, text: "足球" },
				{ value: 3, text: "游泳" },
				{ value: 4, text: "游泳" },
				{ value: 5, text: "游泳" },
				{ value: 6, text: "游泳" },
			],

			// 车辆类型
			carValue: 0,
			carRange: [
				{ text: "机动车", value: 0, },
				{ text: "非机动车", value: 1, },
			],

			// 分组
			groupValue: 0,
			groupRange: [
				{ value: 0, text: "篮球" },
				{ value: 1, text: "足球" },
				{ value: 2, text: "游泳" },
			],

			// 车牌
			platePlace: ['沪', '鲁', '浙', '苏', '豫', '皖',
				'粤', '辽', '甘', '闽', '赣', '冀', '晋', '京', '津',
				'渝', '蒙', '吉', '黑', '湘', '鄂', '桂', '琼', '川',
				'贵', '云', '藏', '陕', '青', '宁', '新', '港', '澳', '台'],
			plateTitle: '无',
			plateNum: '',
			plateArray: [],
			// 定义变量接受车牌多个结果
			appoForData: {
				plate: '',
				supplier: '',
				brandName: '',
				// 数量
				goodsNum: '',
				// 重量
				goodsWeight: '',
				// 更多供货商
				moreSupplier: {},
				// 更多品名
				moreBrandName: {}
			},

			// 供应商
			supplierArray: [],
			// 品名
			brandNameArray: [],
			// 随车人数
			appoPeople: '',
			// 货主姓名
			stockName: '',
			// 来源地
			placeFrom: '',
			// 进货席位
			stockPlace: '',
			// 批号
			lotNum: '',
			// 表格数据
			entourageName: '',
			entouragePhone: '',
			entourageIdCard: '',
			entourageData: []
		};
	},
	watch: {
		firstDateChoosenIndex(newval) {
			if (newval === 0) {
				this.dateRangeChosen[1] = JSON.parse(JSON.stringify(this.dateTodayData));
				this.dateRangeChosen[2] = JSON.parse(JSON.stringify(this.dateTodayData))
				this.dateRangeChosen[2].splice(0, 1)
				this.dateRangeChosen[2].push('00:00')
			} else {
				this.dateRangeChosen[1] = JSON.parse(JSON.stringify(this.dateRange[1]));
				this.dateRangeChosen[2] = JSON.parse(JSON.stringify(this.dateRange[2]));
			}
			this.secondDateChoosenIndex = 0;
			this.thirdDateChoosenIndex = 0;
		},

		// 第二个下标改变后，删除 第三个数组中 0 - 第二个下标的内容
		secondDateChoosenIndex(newval) {
			if (this.firstDateChoosenIndex === 0) {
				let timeData = this.get_date(new Date(), ' ')
				let todayTime = parseInt(timeData.time.split(':')[0])
				let arr = JSON.parse(JSON.stringify(this.dateTodayData))
				this.dateRangeChosen[2] = arr.splice(parseInt(newval));
				this.dateRangeChosen[2].splice(0, 1)
				this.dateRangeChosen[2].push('00:00')
			} else {
				let arr = JSON.parse(JSON.stringify(this.dateRange));
				// 第三个数组 this.dateRangeChosen[2][newval]
				// 赋予左边数组右边被删除的内容(0 ~ 第二个下标)
				this.dateRangeChosen[2] = arr[2].splice(parseInt(newval));
				// console.log(this.dateRangeChosen[2]);
			}
			// 第二个下标改变后，第三个下标归零
			this.thirdDateChoosenIndex = 0;
			console.log(this.thirdDateChoosenIndex);
			this.selectDate =
				this.dateRangeChosen[0][this.firstDateChoosenIndex] + ' ' +
				this.dateRangeChosen[1][this.secondDateChoosenIndex] + '-' +
				this.dateRangeChosen[2][this.thirdDateChoosenIndex]
			console.log('侦听器' + this.selectDate);
		}
	},
	onLoad(options) {
		console.log(options.type);
		this.dateRangeChosen = JSON.parse(JSON.stringify(this.dateRange));
		// 今日开始时间数组 初始化
		let timeData = this.get_date(new Date(), ' ')
		let todayTime = parseInt(timeData.time.split(':')[0])
		this.dateRangeChosen[1] = this.dateTodayData.splice(todayTime);
		this.dateRangeChosen[2] = JSON.parse(JSON.stringify(this.dateRangeChosen[1]));
		this.dateRangeChosen[2].splice(0, 1).push('00:00')
		// 处理完毕后存入今日时间
		this.dateTodayData = JSON.parse(JSON.stringify(this.dateRangeChosen[1]));
		console.log(this.dateRangeChosen);
		for (let index = 0; index < 3; index++) {
			let timeObj = this.get_date(Date.now() + index * 24 * 60 * 60 * 1000, '-');
			// console.log(timeObj.date.slice(2));
			// 添加3天时间选择
			// this.dateRangeChosen[0].push(timeObj.date.slice(2))
			this.dateRangeChosen[0].push(timeObj.date)
		}

		/* 			蔬菜进场 1
						果品进场 2
						肉类进场 3
						干货粮油进场 4
						冻品进场 5
						进口冷链 6    */

		switch (parseInt(options.type)) {
			case 1:
				this.stockType = '蔬菜';
				this.stockAppoType = '蔬菜'
				break;
			case 2:
				this.stockType = '果品';
				this.stockAppoType = '果品'
				break;
			case 3:
				this.stockType = '肉类';
				this.stockAppoType = '肉类'
				break;
			case 4:
				this.stockType = '干货';
				this.stockAppoType = '干货'
				break;
			case 5:
				this.stockType = '粮油';
				this.stockAppoType = '粮油'
				break;
			case 6:
				this.stockType = '国产冻品';
				this.stockAppoType = '国产货'
				break;
			case 7:
				this.stockType = '进口冷链';
				this.stockAppoType = '进口货'
				break;
		}

		// 初始化时间选择
		this.selectDate =
			this.dateRangeChosen[0][0] + ' ' +
			this.dateRangeChosen[1][0] + '-' +
			this.dateRangeChosen[2][0]
		// console.log(this.selectDate);
		// 如果是从首页进去，则有预约码
		// console.log(options.appoNum);

		uni.setNavigationBarTitle({ title: this.stockType })
	},
	methods: {
		// 提交
		/* 
			{
				“openid”: “”,
				“dept”: “蔬菜/肉类/干货粮油/冷库冻品”,
				“preType”: “进货类型”,
				“viecleType”: “车辆类型”,
				“plateNo”: “车牌号，多个车牌以;分割”,
				“supplier”: “供应商，多个供应商以;分割”,
				“variety”: “品种+空格+数量+空格+重量，多个品种以;分割”,
				“quantity”: “总数量”,
				“weight”: “总重量”,
				“source”: “来源地”,
				“stall”: “进货席位”,
				“owner”: “货主名称”,
				“preTime”: “预约进场时间”,
				“crewCount”: “随车人数”,
				“crews”: “手机+身份证+姓名，多个人员以;分割”
				batchNo: "批号"
				}
		*/

		// 获取最近一条信息
		async onGetLastestAppoData() {
			const { data: res } = await getLastestAppoData(this.openid);
			console.log(res.Data);
			let LastestData = res.Data[0]
			// 品种一样自动填充
			if (LastestData.preType == this.stockAppoType) {
				// 车辆类型
				if (LastestData.viecleType == '机动车') {
					this.carValue = 0
				} else {
					this.carValue = 1
				}
				// 两个数据类型相同
				// 车牌号
				this.plateArray = []
				if (LastestData.plateNo[0]) {
					this.plateArray = LastestData.plateNo
				}
				// 供应商
				this.supplierArray = []
				if (LastestData.supplier[0]) {
					this.supplierArray = LastestData.supplier
				}
				// 数据类型不同
				// 品名 (根据单位判断属性)
				this.brandNameArray = []
				for (let i = 0; i < LastestData.variety.length; i++) {
					let item = LastestData.variety[i].split(' ')
					if (item[0]) {
						let obj = {
							brandName: item[0],
						};
						// 判断item[1] item[2] 是否有 个, kg
						if (item[1]) {
							if (item[1].indexOf('个')) {
								let num = item[1].slice(0, item[1].length - 1)
								obj['goodsNum'] = num
							}
							if (item[1].indexOf('kg')) {
								let weight = item[1].slice(0, item[1].length - 2)
								obj['goodsWeight'] = weight
							}
						}
						if (item[2]) {
							if (item[2].indexOf('个')) {
								let num = item[2].slice(0, item[2].length - 1)
								obj['goodsNum'] = num
							}
							if (item[2].indexOf('kg')) {
								let weight = item[2].slice(0, item[2].length - 2)
								obj['goodsWeight'] = weight
							}
						}
						this.brandNameArray.push(obj);
					}
				}
				// 随行人员 (根据字符串长度判断属性)
				this.entourageData = []
				for (let i = 0; i < LastestData.crews.length; i++) {
					let item = LastestData.crews[i].split(' ')
					if (item[0]) {
						let obj = {
							name: item[0],
						};
						// 判断item[1] item[2] 是否有 个, kg
						if (item[1]) {
							if (item[1].length == 11) {
								obj['phone'] = item[1]
							}
							if (item[1].length == 18) {
								obj['idCard'] = item[1]
							}
						}
						if (item[2]) {
							if (item[2].length == 11) {
								obj['phone'] = item[2]
							}
							if (item[2].length == 18) {
								obj['idCard'] = item[2]
							}
						}

						this.entourageData.push(obj);
						console.log(this.entourageData);
					}
				}
				// 冻品是否国产
				this.stockAppoType = LastestData.preType;
				// 来源地
				this.placeFrom = LastestData.source
				// 进货席位
				this.stockPlace = LastestData.stall
				// 货主姓名
				this.stockName = LastestData.owner
				// 预约进场时间 preTime
				this.selectDate = LastestData.preTime
				// 随车人数 crewCount
				this.appoPeople = LastestData.crewCount
				// 批号
				this.lotNum = LastestData.batchNo
			} else if (!LastestData.dept) {
				uni.showModal({
					title: '获取失败',
					content: `暂无预报信息`,
					showCancel: true,
					success: ({ confirm, cancel }) => { }
				})
			} else {
				uni.showModal({
					title: '获取失败',
					content: `上一条预报类型是${LastestData.dept}`,
					showCancel: true,
					success: ({ confirm, cancel }) => { }
				})
			}


		},

		// 重置信息
		resetData() {
			// 车牌
			this.plateArray = [];
			// 供应商
			this.supplierArray = []
			// 品名
			this.brandNameArray = []
			// 车辆类型
			this.carValue = 0
			// 随行人员
			this.entourageData = []

			this.placeFrom = ''
			this.stockPlace = ''
			this.stockName = ''
			this.selectDate =
				this.dateRangeChosen[0][0] + ' ' +
				this.dateRangeChosen[1][0] + '-' +
				this.dateRangeChosen[2][0]
			this.appoPeople = ''
			this.lotNum = ''
			console.log('重置信息');
		},

		async onSubmit() {
			try {
				// 输入框数据记录数组
				if ((this.plateTitle + this.plateNum).length === 6 || (this.plateTitle + this.plateNum).length === 7) {
					this.plateArray.push((this.plateTitle + this.plateNum));
					this.plateTitle = ''
					this.plateNum = ''
				}
				if (this.appoForData.supplier) {
					this.supplierArray.push(this.appoForData.supplier);
					this.appoForData.supplier = ''
				}
				if (this.appoForData.brandName) {
					this.brandNameArray.push({
						brandName: this.appoForData.brandName,
						goodsNum: this.appoForData.goodsNum,
						goodsWeight: this.appoForData.goodsWeight
					})
					this.appoForData.brandName = '';
					this.appoForData.goodsNum = '';
					this.appoForData.goodsWeight = '';
				}
				this.addEntourage()
				// 品种info
				let brandNameStringArray = [];
				// 总数量
				let sumNum = 0
				// 总重量
				let sumWeight = 0;
				// 商品info转字符串数组
				for (let i = 0; i < this.brandNameArray.length; i++) {
					let brandInfoString = this.brandNameArray[i].brandName
					if (this.brandNameArray[i].goodsNum) {
						brandInfoString = brandInfoString + ' ' + this.brandNameArray[i].goodsNum + '件'
						sumNum = sumNum + parseFloat(this.brandNameArray[i].goodsNum);
					}
					if (this.brandNameArray[i].goodsWeight) {
						brandInfoString = brandInfoString + ' ' + this.brandNameArray[i].goodsWeight + 'kg'
						sumWeight = sumWeight + parseFloat(this.brandNameArray[i].goodsWeight)
					}
					brandNameStringArray.push(brandInfoString)
				}

				// 随行人员info
				let entourageInfoStringArray = [];
				// 随行人员信息转字符串数组
				for (let i = 0; i < this.entourageData.length; i++) {
					let entourageInfoString = this.entourageData[i].name
					if (this.entourageData[i].phone && this.entourageData[i].phone.length == 11) {
						entourageInfoString = entourageInfoString + ' ' + this.entourageData[i].phone
					}
					if (this.entourageData[i].idCard && this.entourageData[i].idCard.length == 18) {
						entourageInfoString = entourageInfoString + ' ' + this.entourageData[i].idCard
					}

					entourageInfoStringArray.push(entourageInfoString)
				}
				console.log(entourageInfoStringArray.join(';'));

				if (this.plateArray.length == 0 && this.carValue == 0) {
					uni.showModal({
						title: '预报失败',
						content: '至少填写一个车牌号',
						showCancel: true,
					})
				} else if (this.brandNameArray.length == 0) {
					uni.showModal({
						title: '预报失败',
						content: '至少填写一个品种',
						showCancel: true,
					})
				}
				else {
					let crewCount = 0
					if(this.appoPeople){
						crewCount = parseInt(this.appoPeople)
					} 
					const { data: res } = await upLoadAppoData(
						this.openid,
						this.stockType,
						this.stockAppoType, // 冻品是否国产
						this.carRange[this.carValue].text,//是否非机动车,
						this.plateArray.join(';'),//plateNo,
						this.supplierArray.join(';'),
						brandNameStringArray.join(';'),
						sumNum,
						sumWeight,
						this.placeFrom,
						this.stockPlace,
						this.stockName,
						this.selectDate,
						crewCount,
						entourageInfoStringArray.join(';'),
						this.lotNum,// 批号
					)
					console.log(res);
					uni.showModal({
						title: '预报结果',
						content: res.Message,
						showCancel: true,
						success: ({ confirm, cancel }) => {
							uni.reLaunch({
								url: "/sub_pages/pages/appo_type/appo_type"
							});
						}
					})
				}
			} catch (e) {
				console.log('提交出错');
				console.log(e);
			}

		},

		// 身份证正则 弃用
		/* 		idChange(idVal) {
					let _IDRe18 = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
					let _IDre15 = /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/
					// 校验身份证：
					if (_IDRe18.test(idVal) || _IDre15.test(idVal)) {
						console.log(' 验证通过 ')
					} else {
						console.log(' 验证未通过 ')
						uni.showModal({
							title: '身份证格式错误',
							content: '',
							showCancel: true,
							success: ({ confirm, cancel }) => { }
						})
					}
				}, */

		// 新增车牌
		addPlate() {
			let plate = this.plateTitle + this.plateNum
			if (plate && this.plateNum.length >= 6) {
				if (this.plateTitle != '无') {
					this.plateArray.push(plate)
				}
				this.plateTitle = '无';
				this.plateNum = '';
				console.log(this.plateArray);
			} else {
				uni.showModal({
					title: '请填写完整车牌',
					content: '',
					showCancel: true,
					success: ({ confirm, cancel }) => { }
				})
			}
		},
		// 删除当前车牌
		delTag(item) {
			let index = this.plateArray.indexOf(item)
			this.plateArray.splice(index, 1)
		},
		// 新增供货商
		addSupplier() {
			if (this.appoForData.supplier) {
				this.supplierArray.push(this.appoForData.supplier);
				this.appoForData.supplier = ''
			} else {
				uni.showModal({
					title: '请填写供应商',
					content: '',
					showCancel: true,
					success: ({ confirm, cancel }) => { }
				})
			}
		},
		// 删除当前供货商
		delSupplier(item) {
			let index = this.supplierArray.indexOf(item)
			this.supplierArray.splice(index, 1)
		},

		// 新增品名
		addBrandName() {
			if (this.appoForData.brandName) {
				this.brandNameArray.push({
					brandName: this.appoForData.brandName,
					goodsNum: this.appoForData.goodsNum,
					goodsWeight: this.appoForData.goodsWeight
				})
				this.appoForData.brandName = '';
				this.appoForData.goodsNum = '';
				this.appoForData.goodsWeight = '';
			} else {
				uni.showModal({
					title: '请填写完整品名',
					content: '',
					showCancel: true,
					success: ({ confirm, cancel }) => { }
				})
			}
		},
		// 删除当前品名
		delBrandTag(item) {
			let index = this.brandNameArray.indexOf(item)
			this.brandNameArray.splice(index, 1)
		},
		// 改变选择时间
		changeLog(e) {
			console.log('change事件:', e);
		},
		// 增加随车人员
		addEntourage() {
			if (this.entourageName) {
				let obj = {
					name: this.entourageName,
					id: Date.now()
				}
				if (this.entouragePhone && this.entouragePhone.length === 11) {
					obj['phone'] = this.entouragePhone
				}
				if (this.entourageIdCard && this.entourageIdCard.length === 18) {
					obj['idCard'] = this.entourageIdCard
				}
				this.entourageData.push(obj)
				this.entourageIdCard = '';
				this.entourageName = '';
				this.entouragePhone = '';
			}
		},
		// 删除随车人员
		delEntourage(id) {
			let index = this.entourageData.findIndex(v => v.id === id)
			this.entourageData.splice(index, 1)
		},
		// 打开车牌键盘
		openPlateTitle() {
			this.$refs.popup.open();
		},
		// 选择车牌
		choosePlate(plate) {
			this.plateTitle = plate;
			this.$refs.popup.close();
		},
		// 选择日期
		dateChange(e) {
			if (e.detail.column == 0) {
				this.firstDateChoosenIndex = e.detail.value
			} else if (e.detail.column == 1) {
				this.secondDateChoosenIndex = e.detail.value;
			} else if (e.detail.column == 2) {
				this.thirdDateChoosenIndex = e.detail.value;
			}
			this.selectDate =
				this.dateRangeChosen[0][this.firstDateChoosenIndex] + ' ' +
				this.dateRangeChosen[1][this.secondDateChoosenIndex] + '-' +
				this.dateRangeChosen[2][this.thirdDateChoosenIndex]
			console.log('函数' + this.selectDate);
		},

		// 日期格式化函数
		get_date(pTimestamp, pMark) {
			const date = new Date(pTimestamp);

			const year = date.getFullYear();
			const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
			const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
			const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
			const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			const second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

			const lDate = year + pMark + month + pMark + day;
			const lTime = hour + ":" + minute + ":" + second;
			const obj = {
				"date": lDate,
				"time": lTime,
				"datetime": lDate + " " + lTime,
			};

			return obj;
		}
	}
}
</script>

<style lang="scss" scoped>
.plate {
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.plateTitle {
		flex: 1;
		height: 100%;

		.plate_choose {
			/* display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 10px; */
			display: grid;
			justify-content: center;
			grid-template-columns: repeat(8, 10%);
			gap: 10px;
			// grid-template-rows: repeat(3, 33.33%);
			// display: inline-grid;
			height: 20vh;
			font-size: 20px;
			margin-bottom: 40px;

			.title {
				border: 1px solid rgb(172, 172, 172);
				border-radius: 5px;
				padding: 3px;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.press_title {
				background-color: rgb(172, 172, 172);
			}
		}
	}

	.plateNum {
		flex: 7;
		margin: 5px;
	}


}

.form-item {
	display: flex;
	align-items: center;
}

.button {
	display: flex;
	align-items: center;
	height: 35px;
	margin-left: 10px;
}

.add {
	flex: 2;
	display: flex;
	align-items: center;

	.btn {
		color: #007aff;
		border: 1px solid #007aff;

		height: 35px;
		width: 100%;
		padding: 0;
		line-height: 35px;
	}

	.press_btn {
		color: #86c0ff;
		border: 1px solid #86c0ff;
		height: 35px;
		width: 100%;
		padding: 0;
		line-height: 35px;
	}

	.btn_del {
		color: #ff3300;
		border: 1px solid #ff3300;
		height: 35px;
		width: 100%;
		padding: 0;
		line-height: 35px;
	}

	.press_btn_del {
		color: #ff9980;
		border: 1px solid #ff9980;
		height: 35px;
		width: 100%;
		padding: 0;
		line-height: 35px;
	}

}

.tag {
	margin-top: 2vh;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 2vh;
	gap: 1vw;

	.tag_item {
		display: flex;
		border: 1px solid #2979ff;
		color: #2979ff;
		font-size: 15px;
		border-radius: 5px;
		align-items: center;

		// margin-right: 2vw;
		.item_info {
			padding: 2px;
		}

		.img {
			margin-left: 5px;
			width: 15px;
			height: 15px;
		}
	}
}

.decoration {
	width: 6px;
	height: 6px;
	margin-right: 4px;
	border-radius: 50%;
	background-color: #18bc37;
}

.section {
	margin-bottom: 2vh;
}

.date-select {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: auto;
	border-radius: 5px;
	border: 1px solid #e5e5e5;
	color: #a5b2d1;
}

.two_btn {
	display: flex;
	// justify-content: space-between;
	gap: 5px;

	.btn_submit_1 {
		flex: 1;
		color: #fff;
		background-color: #79c667;
	}

	.btn_press_submit_1 {
		background-color: #90bd86;
	}

	.btn_submit_2 {
		flex: 1;
		color: #fff;
		background-color: #e75757;
	}

	.btn_press_submit_2 {
		background-color: #db7676;
	}

}

.btn_submit {
	flex: 1;
	color: #fff;
	background-color: #79c667;
}

.btn_press_submit {
	background-color: #90bd86;
}
</style>
