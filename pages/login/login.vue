<template>
	<view>
		<view class="login-img">
			<image src="../../static/image/login.png"></image>
		</view>
		
		<view class="login-button">
			<!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号码</button> -->
			<button open-type="getUserInfo" @getuserinfo="getUserInfo">微信登录</button>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'

	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				sessionKey: '',
				openid: '',
				encryptedData: '',
				iv: '',
				wxcode:'',
				token:''
			}
		},
		onLoad() {
			let that = this
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					that.wxcode=loginRes.code
					console.log('wxcode:',that.wxcode)
				}
			})
		},
		methods: {
			getUserInfo(e){
				if (e.detail.errMsg == "getUserInfo:ok") { //用户决绝授权
					console.log('getUserInfo:',e.detail)
					this.axios.post('weixin/login', {
						code: this.wxcode,
						companyId:1
					}).then(res => {
						console.log(res)
						if (res.data.data.is_need_phone == false) {
							uni.setStorageSync('token', res.data.data.token);
							uni.showToast({
								title: "登录成功!",
								duration: 2000
							})
							setTimeout(function() {
								uni.switchTab({
									url: '../tabBar/task/task'
								})
							}, 2000)
						} else {
							uni.setStorageSync('token', res.data.data.token);
							uni.navigateTo({
								url: 'bindphone'
							})
						}
					})
					
					
					
					// uni.request({
					// 	method: 'post',
					// 	url: 'http://47.100.125.167:8082/weixin/login?code=' + this.wxcode +'&companyId=' + 1,
					// 	success: (res) => {
					// 		console.log(res.data)
					// 		// if(res.data.is_need_phone==false){
					// 		// 	uni.setStorageSync('token', res.data.token);
					// 		// 	uni.switchTab({
					// 		// 		url: '../tabBar/task/task'
					// 		// 	})
					// 		// }else{
					// 		// 	uni.setStorageSync('token', res.data.token);
					// 		// 	uni.navigateTo({
					// 		// 		url: 'bindphone'
					// 		// 	})
					// 		// }
					// 	},
					// 	fail: (err) => {
					// 		console.log(err)
					// 		uni.showModal({
					// 			content: err,
					// 			confirmText: "知道了",
					// 			showCancel: false
					// 		})
					// 	}
					// })	
				} else {
					console.log(e.detail)
					uni.showModal({
						content: e.detail,
						confirmText: "知道了",
						showCancel: false
					})
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #004343;
	}

	.uni-icons {
		line-height: 80rpx !important;
	}
</style>
