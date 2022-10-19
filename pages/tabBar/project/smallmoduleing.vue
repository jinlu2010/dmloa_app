<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist">
				<view v-if="smallmodulelist.length == 0">
					<text class="none" style="height: 110rpx;">还没有创建小模块哦~</text>
				</view>
				<view class="list-item-content" @tap="WorkSheet(item)" v-for="item in smallmodulelist" :key="item.id">
					<text class="title teamkpi">{{item.name}}</text>
					<uni-icons type="arrowright" size="20" color="#CCC" class="right lh"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
		</view>
		<view class="project-button">
			<view v-if="smallmodulelist.length == 0">
				<button class="hidden" @tap="EditSmallModule">编辑项目小模块</button>
			</view>
			<view v-if="bigmodulelist.length != 0">
				<button class="btngreen" @tap="EditSmallModule">编辑项目小模块</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smallmodulelist:[],
				module_id:'',
				module_name:'',
				project_id:''
			}
		},
		onShow() {
			this.SmallModuleList();
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.module_id = item.id
			this.module_name = item.name
			this.project_id = item.pid
		},
		methods: {
			SmallModuleList:function(){
				this.axios.get('module/get_all', {
					params: {
						'level_id': 1,
						'father_id':this.module_id
					}
				}).then(res => {
					this.smallmodulelist=res.data.data
					console.log('smallmodulelist:',this.smallmodulelist)
				})
			},
			WorkSheet:function(item){
				var data ={
					'pid':this.project_id,
					'id':item.id
				}
				uni.navigateTo({
					url: 'worksheeting?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			EditSmallModule:function(){
				var data ={
					'pid':this.project_id,
					'id':this.module_id,
					'name':this.module_name
				}
				uni.navigateTo({
					url: 'editsmallmodule?item='+ encodeURIComponent(JSON.stringify(data))
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
