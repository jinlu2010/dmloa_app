<template>
	<view>
		<view class="login-img">
			<image src="../../static/image/login.png"></image>
		</view>

		<view class="login-form">
			<uni-icons type="phone-filled" size="24" color="#004343" class="title-left ml40"></uni-icons>
			<input name="account" v-model="login.account" placeholder="请输入手机号码" />
		</view>
		<view class="login-form">
			<uni-icons type="email-filled" size="24" color="#004343" class="title-left ml40"></uni-icons>
			<input name="code" v-model="login.code" placeholder="请输入短信验证码" class="code" />
			<button class="sendcode" @click="Sendcode">{{valiBtn}}</button>
		</view>
		<view class="login-button">
			<button @click="Login">绑定手机</button>
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
				valiBtn: "获取验证码",
				login: {
					account: "",
					code: "",
					smscode: "",
				},
				disabled:false
			}
		},
		onLoad() {
			
		},
		methods: {
			Sendcode: function() {
				/* this.$request.post('auth/sms/send_code', {
					"phone": this.login.account,
				}).then(res => {
					console.log(res.data);
				}) */

				/* uni.request({
					method: 'post',
					url: 'http://47.100.125.167:8082/auth/sms/send_code',
					data: {
						'phone': this.login.account
					},
					headers: {
						'content-type': 'application/json' // 默认值
					},
					success: (res) => {
						console.log(res.data)
					},
					fail: (err) => {
						console.log(err)
					}
				}) */

				this.axios.post('auth/sms/send_code', {
					"companyId":1,
					"phone": this.login.account
				}).then(function(res) {
					console.log(res.data)
				})

				this.tackBtn(); //验证码倒数60秒	
			},
			//验证码倒数60秒
			tackBtn() {
				let time = 60;
				let timer = setInterval(() => {
					if (time == 0) {
						clearInterval(timer);
						this.valiBtn = "获取验证码";
						this.disabled = false;
					} else {
						this.disabled = true;
						this.valiBtn = time + '秒后重试';
						time--;
					}
				}, 1000);
			},
			Login: function() {
				this.axios.post('weixin/bind/phone', {
					"phone": this.login.account,
					"code": this.login.code
				}).then(function(res) {
					console.log(res.data);
					if (res.data.code == 200) {
						uni.showToast({
							title: "绑定成功!",
							duration: 2000
						})
						setTimeout(function() {
							uni.switchTab({
								url: '../tabBar/task/task'
							})
						}, 2000)
					} else {
						uni.showModal({
							title: "提示",
							content: res.data.message,
							showCancel: false
						});
					}
				})
				/* this.$request.post('auth/login', {
					"phone": this.login.account,
					"code": this.login.code,
					"company_id": 1
				}).then(res => {
					console.log(res.data);
					if (res.data.code == 200) {
						uni.showToast({
							title: "登录成功!",
							duration: 2000
						})
						setTimeout(function() {
							uni.setStorageSync('token', res.data.data.token);
							console.log(res.data.data.token)
							uni.switchTab({
								url:'../tabBar/task/task'
							})
					 	}, 2000)
					} else {
						uni.showModal({
							title: "提示",
							content: res.data.message,
							showCancel: false
						});
					}
				}) */

				/* uni.request({
					method: 'post',
					url: 'http://47.100.125.167:8082/auth/login',
					data: {
						'phone': this.login.account,
						'code': this.login.code,
						'company_id': 1
					},
					headers: {
						'content-type': 'application/json' // 默认值
					},
					success: (res) => {
						console.log(res.data)
						if (res.data.code == 200) {
							uni.showToast({
								title: "登录成功!",
								duration: 2000
							})
							setTimeout(function() {
								uni.setStorageSync('token', res.data.data.token);
								console.log(res.data.data.token)
								//that.$router.push('/')
								uni.switchTab({
									url:'../tabBar/task/task'
								})
							}, 2000)
						} else {
							uni.showModal({
								title: "提示",
								content: res.data.message,
								showCancel: false
							});
						}
					},
					fail: (err) => {
						console.log(err)
					}
				}) */

				
				/* let data={
					"phone": this.login.account,
					"code": this.login.code,
					"company_id": 1
				}
				var Login = JSON.stringify(data)
				this.axios.post('api/auth/login',Login,{
					headers: {
						'content-type': 'application/json' // 默认值
					}
				}).then(function(res) {
					console.log(res.data);
					if (res.data.code == 200) {
						uni.showToast({
							title: "登录成功!",
							duration: 2000
						})
						setTimeout(function() {
							uni.setStorageSync('token', res.data.data.token);
							console.log(res.data.data.token)
							uni.switchTab({
								url:'../tabBar/task/task'
							})
					 	}, 2000)
					} else {
						uni.showModal({
							title: "提示",
							content: res.data.message,
							showCancel: false
						});
					}
				}) */
			}
		}
	}
</script>

<style>
	page {
		background-color: #004343;
	}

	.code {
		width: 240rpx;
		float: left
	}

	.sendcode {
		width: 200rpx;
		font-size: 24rpx;
		float: right;
		line-height: 80rpx;
		border-radius: 40rpx;
		background-color: #FFFFFF;
	}

	.uni-icons {
		line-height: 80rpx !important;
	}
</style>
