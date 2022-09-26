<template>
	<view class="newtask">
		<view class="form">
			<view class="form-item">
				<view class="title">企业头像</view>
				<image :src="iconUrl" class="logo"></image>
				
				<!-- <uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles" file-mediatype="image">选择</uni-file-picker>
				<uni-file-picker limit="1" :auto-upload="false" v-model="imageValue" file-mediatype="image" @select="upload"></uni-file-picker> -->

			</view>
			<view class="form-item">
				<view class="title">企业名称</view>
				<input class="input" v-model="name" />
			</view>
			<view class="form-item">
				<view class="title">战略目标</view>
				<input class="input" v-model="goal" />
			</view>
			<view class="form-item">
				<view class="title">人员规模</view>
				<picker @change="scaleArrChange" :value="scale_id" :range="scaleArr" range-key="name">
					<view class="input">{{scaleArr[scale_id].name}}
						<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="form-item">
				<view class="title">联系方式</view>
				<input class="input" v-model="phone" />
			</view>
			<view class="form-item">
				<view class="title">企业地址</view>
				<input class="input" v-model="address" />
			</view>
			<view class="form-item">
				<view class="title">联系邮箱</view>
				<input class="input" v-model="email" />
			</view>

		</view>
		<button class="btngreen btnform" @click="save()">保存</button>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';

	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				id:'',
				upload_id:0,
				iconUrl: require('../../static/image/userface.png'),
				name: '',
				goal: '',
				phone: '',
				address: '',
				email: '',
				scale_id: 0,
				scaleArr: [{name:'10人以下'},{name:'11-50人'},{name:'51-100人'},{name:'100人以上'}],
				employee_num:'',
				filePathsList:''
			}
		},
		onLoad(option) {
			this.id=option.id
			this.axios.get('company/info').then(res => {
				console.log(res.data.data),
				this.address = res.data.data.address,
				this.email = res.data.data.email,
				this.employee_num = res.data.data.employee_num,
				this.goal =res.data.data.goal,
				//this.iconUrl = res.data.data.iconUrl,
				this.name=res.data.data.name,
				this.phone=res.data.data.phone
				
				let scale = this.scaleArr
				this.scale_id = (scale).findIndex ((scale) => scale.name  ==  this.employee_num );
			})
		},
		methods: {
			save() {
				let data = {
					address: this.address,
					email: this.email,
					employee_num: this.scaleArr[this.scale_id].name,
					goal: this.goal,
					id: 1,
					name: this.name,
					phone: this.phone
				}
				let company = JSON.stringify(data);
				let that = this
				this.axios.post('company/save', company)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，企业信息修改成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								cancelText:'再建一条',//这块是取消的文字
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack({
											delta: 1,
										});
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							})
						} else {
							uni.showModal({
								content: res.data.message,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
			},
			scaleArrChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.scale_id = e.detail.value
			},
			// uni.chooseImage({
			// 	success: (chooseImageRes) => {
			// 		const tempFilePaths = chooseImageRes.tempFilePaths;
			// 		uni.uploadFile({
			// 			url: 'http://47.100.125.167:8082/api/upload', //仅为示例，非真实的接口地址
			// 			filePath: tempFilePaths[0],
			// 			name: 'file',
			// 			formData: {
			// 				'user': 'test'
			// 			},
			// 			success: (uploadFileRes) => {
			// 				console.log(uploadFileRes.data);
			// 			},
			// 			fail: (err) => {
			// 				uni.showModal({
			// 					content: err,
			// 					confirmText: "知道了",
			// 					showCancel: false
			// 				})
			// 			}
			// 		});
			// 	}
			// });
			upload(e) {
				let token = uni.getStorageSync('token')
				console.log(e.tempFilePaths)
				this.filePathsList=e.tempFilePaths
				
					uni.uploadFile({
						url: 'http://47.100.125.167:8082/api/upload',
						header: {
							'token': token,
						},
						filePath: e.tempFilePaths[0],
						name: 'file',
						success: (res) => {
							console.log('uploadImage success, res is:', res)
							this.upload_id = JSON.parse(res.data).data.id
						},
						fail: (err) => {
							uni.showModal({
								content: err,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
				
			},
		}
	}
</script>

<style>
	.logo {
		width: 120rpx;
		height: 120rpx;
		margin-top: 20rpx
	}

	.content {
		font-size: 28rpx;
		color: #666666;
		margin: 22rpx 0;
	}
</style>
