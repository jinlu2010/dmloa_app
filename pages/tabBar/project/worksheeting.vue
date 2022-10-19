<template>
	<view>
		<view class="tabbar">
			<view class="bgtab project-bgtab"></view>
			<view class="tab-title project-tab-title">
				<view>任务截止日期：2020-10-31</view>
			</view>
		</view>
		
		
		<view class="tab-content" style="display: block;">
			<view class="list project">
				<view class="list-item-container rightlist listheight">
					<view v-if="taskdetail == ''">
						<text class="none" style="height: 110rpx;">还没有创建任务哦~</text>
					</view>
					<view class="list-item-content"  v-for="item in taskdetail" :key="item.id">
						<view class="list-content-left">
							<text class="title">{{item.name}}</text>
							<text class="note">To {{item.operator}}</text>
						</view>
						<view class="list-content-right project-content-right">
							<text class="title">{{item.operator_finished}}</text>
							<text class="date grey">至{{item.end_at}}</text>
						</view>
					</view>
				</view>	
			</view>
			<view class="project-button">
				<view v-if="taskdetail.length == 0">
					<button class="hidden" @tap="EditWorkSheet">编辑任务工单</button>
				</view>
				<view v-if="taskdetail.length != 0">
					<button class="btngreen" @tap="EditWorkSheet">编辑任务工单</button>
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tasklist:[],
				taskdetail:[],
				module_id:'',
				project_id:'',
			}
		},
		onShow() {
			this.TaskList();
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.module_id = item.id
			this.project_id = item.pid
			console.log(item)
		},
		methods: {
			TaskList:function(){
				this.axios.get('task/get_all', {
					params: {
						'is_assigned': true,
						'module_id':this.module_id
					}
				}).then(res => {
					this.taskdetail=[] //让列表为空，否则列表会无限增加
					for(let i =0; i< res.data.data.length; i++){//取id值
						for(let j=0; j<res.data.data[i].task_items.length;j++){
							if(res.data.data[i].task_items[j].is_finished==true){
								this.finished='已完成'
							}else{
								this.finished='进行中'
							}
							this.taskdetail.push({
								id:res.data.data[i].id,
								name:res.data.data[i].name,
								end_at:res.data.data[i].end_at,
								start_at:res.data.data[i].start_at,
								finished:res.data.data[i].is_finished,
								operator:res.data.data[i].task_items[j].operator.name,
								operator_finished:this.finished
							})
						}
					}
				})
			},
			EditWorkSheet:function(){
				var data ={
					'id':this.module_id,
					'pid':this.project_id,
				}
				uni.navigateTo({
					url: 'editworksheet?item='+ encodeURIComponent(JSON.stringify(data))
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	.hidden{
		display: none !important;
	}
</style>
