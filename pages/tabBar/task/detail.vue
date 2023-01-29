<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">任务标题</view>
				<view class="input">{{name}}</view>
			</view>
			<view class="form-item">
				<view class="title">任务时间</view>
				<view class="input">{{start_at}} 至 {{end_at}}</view>
			</view>
			
			<view class="form-item">
				<view class="title">所属项目</view>
				<view class="input">{{module}}</view>
			</view>
			<view class="form-item">
				<view class="title">紧急程度</view>
				<view class="input">{{level}}</view>
			</view>
			<view class="form-item">
				<view class="title">分配人</view>
				<view class="input">{{creator}}</view>
			</view>
			<view class="form-item">
				<view class="title">执行人</view>
				<view class="input">
					<text v-for="item in executor" :key="index" class="executor">{{item + '  '}}</text>
				</view>
			</view>
			<view class="form-item">
				<view class="title">特别提醒</view>
				<view class="input">{{remark}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				start_at:'',
				end_at:'',
				module:'',
				level:'',
				creator:'',
				executor:[],
				remark:'',
			}
		},
		onLoad(option) {
			
			this.axios.get('task/get', {
				params: {
					'id': option.id
				}
			}).then(res => {
				console.log(res.data.data)
				this.name = res.data.data.name,
				this.module=res.data.data.module.name,
				this.start_at = res.data.data.start_at,
				this.end_at=res.data.data.end_at,
				this.creator=res.data.data.creator.name
				if(res.data.data.remark==''){
					this.remark='无'
				}else{
					this.remark=res.data.data.remark
				}
				if(res.data.data.status_id == 0){
					this.level='正常'
				}else if(res.data.data.status_id == 1){
					this.level='紧急'
				}

				for(let i =0; i< res.data.data.task_items.length; i++){//取id值
					this.executor.push(res.data.data.task_items[i].operator.name)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.executor{
		color: #666;
		margin-right: 20rpx;
	}
</style>
