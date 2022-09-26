<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist">
				<view v-if="bigmodulelist == ''">
					<text class="none">还没有创建大模块哦~</text>
				</view>
				<view class="list-item-content"  @tap="SmallModule(item)" v-for="item in bigmodulelist" :key="item.id">
					<text class="title teamkpi">{{item.name}}</text>
					<uni-icons type="arrowright" size="20" color="#CCC" class="right lh"></uni-icons>
					<text class="righttext">已完成50%</text>
				</view>
			</view>
		</view>
		<view class="project-button">
			<button @tap="EditBigModule" class="btngreen">编辑项目大模块</button>
			<button @tap="EditProject" class="btngreen">编辑项目详情</button>
			<button @tap="ProjectDetail" class="btngreen">查看项目详情</button>
			<!-- <button class="btngreen">查看项目进度表</button> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bigmodulelist:[],
				project_id:'',
				project_name:''
			}
		},
		onShow() {
			this.BigModuleList();
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.project_id = item.id
			this.project_name = item.name
		},
		methods: {
			BigModuleList:function(){
				this.axios.get('module/get_all', {
						params: {
							'leve_id': 0,
							'project_id':this.project_id
						}
					})
					.then(res => {
						this.bigmodulelist=res.data.data
						console.log('bigmodulelist:',this.bigmodulelist)
					})
			},
			SmallModule:function(item){
				var data ={
					'name':item.name,
					'id':item.id,
					'pid':this.project_id
				}
				uni.navigateTo({
					url: 'smallmoduleing?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			EditBigModule:function(){
				var data ={
					'name':this.project_name,
					'id':this.project_id
				}
				uni.navigateTo({
					url: 'editbigmodule?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			EditProject:function(){
				uni.navigateTo({
					url: 'editproject?id=' + this.project_id,
				})
			},
			ProjectDetail:function(){
				uni.navigateTo({
					url: 'projectdetail?id=' + this.project_id,
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
