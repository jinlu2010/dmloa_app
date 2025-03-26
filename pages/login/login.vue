<template>
	<view>
		<view class="login-img">
			<image src="../../static/image/login.png"></image>
			<!-- <image src="../../static/image/login2.png"></image> -->
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
		// onLoad() {
		// 	let that = this
		// 	uni.login({
		// 		provider: 'weixin',
		// 		success: function(loginRes) {
		// 			that.wxcode=loginRes.code
		// 			console.log('wxcode:',that.wxcode)
		// 		},
		// 		fail: function (err) {
		// 			// 登录授权失败  
		// 			// err.code是错误码
		// 			console.log( err.code)
		// 		}
		// 	})
		// },
		methods: {
			getUserInfo(e){
				console.log(e)
				let that = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						that.wxcode = loginRes.code
						console.log('wxcode:',that.wxcode)
						// 登录成功
						if (e.detail.errMsg == "getUserInfo:ok") { //用户决绝授权
							console.log('getUserInfo:',e.detail)
							that.axios.post('weixin/login', {
								code: that.wxcode, 
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
								if(res.data.code != 200){
									uni.showModal({
										content:res.data.message,
										confirmText: "知道了",
										showCancel: false
									})
								}
							})
						} else {
							console.log(e.detail)
							uni.showModal({
								content: e.detail,
								confirmText: "知道了",
								showCancel: false
							})
						} 
					},
					fail: function (err) {
						// 登录授权失败  
						// err.code是错误码
						console.log( err.code)
						uni.showToast({
							title: err.code,
							duration: 2000
						})
					}
				})
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
