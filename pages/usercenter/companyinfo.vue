<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">企业头像</view>
				<image src="../../static/image/userface.png" class="logo"></image>
			</view>
			<view class="form-item">
				<view class="title">企业名称</view>
				<view class="content">{{name}}</view>
			</view>
			<view class="form-item">
				<view class="title">战略目标</view>
				<view class="content">{{goal}}</view>
			</view>
			<view class="form-item">
				<view class="title">人员规模</view>
				<view class="content">{{employee_num}}</view>
			</view>
			<view class="form-item">
				<view class="title">联系方式</view>
				<view class="content">{{phone}}</view>
			</view>
			<view class="form-item">
				<view class="title">企业地址</view>
				<view class="content">{{address}}</view>
			</view>
			<view class="form-item">
				<view class="title">联系邮箱</view>
				<view class="content">{{email}}</view>
			</view>
		</view>
		<view class="project-button">
			<button @tap="EditCompany" class="btngreen">编辑企业信息</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:'',
				email:'',
				employee_num:'',
				goal:'',
				iconUrl:'',
				name:'',
				phone:'',
				id:''
			}
		},
		onShow(){
			this.axios.get('company/info').then(res => {
				console.log(res.data.data),
				this.address = res.data.data.address,
				this.email = res.data.data.email,
				this.employee_num = res.data.data.employee_num,
				this.goal =res.data.data.goal,
				this.iconUrl = res.data.data.iconUrl,
				this.name=res.data.data.name,
				this.phone=res.data.data.phone,
				this.id=res.data.data.id
			})
		},
		methods: {
			EditCompany(){
				uni.navigateTo({
					url: 'companyedit?id=' + this.id,
				})
			}
		}
	}
</script>

<style>
	.logo{
		width:120rpx;
		height:120rpx;
		margin-top:20rpx
	}
	.content{
		font-size: 28rpx;
		color: #666666;
		margin: 22rpx 0;
	}
</style>
