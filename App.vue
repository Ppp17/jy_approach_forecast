<script>
export default {
	onLaunch: function () {
		console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
		console.log('App Launch')
		const updateManager = uni.getUpdateManager() // 小程序版本更新管理器
		updateManager.onCheckForUpdate(res => { // 检测新版本后的回调
			if (res.hasUpdate) { // 如果有新版本提醒并进行强制升级
				uni.showModal({
					content: '新版本已经准备好，是否重启应用？',
					showCancel: false,
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							updateManager.onUpdateReady(res => { // 新版本下载完成的回调
								updateManager.applyUpdate() // 强制当前小程序应用上新版本并重启
							})

							updateManager.onUpdateFailed(res => { // 新版本下载失败的回调
								// 新版本下载失败，提示用户删除后通过冷启动重新打开
								uni.showModal({
									content: '下载失败，请删除当前小程序后重新打开',
									showCancel: false,
									confirmText: '知道了'
								})
							})
						}
					}
				})
			}
		})

	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
}

</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
/* #ifndef APP-NVUE */
@import '@/static/customicons.css';

// 设置整个项目的背景色
page {
	background-color: #f5f5f5;
	// background: linear-gradient(rgb(255, 255, 255),rgb(255, 243, 210));
	width: 100%;
	height: 100%;
}

uni-page-body,
#app {
	height: 100%;
}

/* #endif */
.example-info {
	font-size: 14px;
	color: #333;
	padding: 10px;
}</style>
