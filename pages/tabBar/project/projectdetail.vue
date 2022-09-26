<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">项目标题</view>
					<text>{{name}}</text>
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<text>{{user}}</text>
				</view>
				<view class="form-item">
					<view class="title">服务对象</view>
					<text>{{client}}</text>
				</view>
				<view class="form-item">
					<view class="title">服务目的</view>
					<text>{{purpose}}</text>
				</view>
				<view class="form-item">
					<view class="title">服务目标</view>
					<text>{{goal}}</text>
				</view>
				<view class="form-item">
					<view class="title">项目周期</view>
					<text>{{start_at}}至{{end_at}}</text>
				</view>
				<view class="form-item">
					<view class="title">项目状态</view>
					<text>{{status}}</text>
				</view>
				<view class="form-item">
					<view class="title">对接人</view>
					<text>{{contact}}</text>
				</view>
				<view class="form-item">
					<view class="title">项目预算</view>
					<text>{{budget}}</text>
				</view>
				<view class="form-item">
					<view class="title">验收标准</view>
					<text>{{standard}}</text>
				</view>
				<view class="form-item">
					<view class="title">相关介绍</view>
					<view class="textarea">{{intro}}</view>
				</view>
			</view>
		</form>
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
				name:'',
				remark:'',
				user: '',
				budget:'',
				client:'',
				contact:'',
				goal:'',
				intro:'相关介绍相关介绍相关介绍相关介绍相关介绍相关介绍相关介绍相关介绍相关介绍相关介绍',
				purpose:'',
				standard:'',
				status:'',
				start_at:'2022-05-01',
				end_at:'2022-05-31'
			}
		},
		onLoad(option){
			this.axios.get('project/get', {
				params: {
					'id':option.id
				}
			}).then(res => {
				console.log(res.data.data)
				this.name=res.data.data.name,
				this.user=res.data.data.director.name
			})
		}
	}
</script>

<style>
	text{
		font-size: 28rpx;
		color: #666666;
		line-height: 90rpx;
		height: 90rpx;
	}
	.textarea{
		line-height: 48rpx;
		padding-top: 10rpx;
	}
</style>
