<template>
	<view>
		<view class="status-contents">
			 <view class="status top-view">
			 	<view class="titles">
			 		<view class="UserFace">
						<image :src="imgUrl"></image>
					</view>
			 		<view class="titleText">{{titleText}}</view> 
			 		<view class="RightButton">
			 			<uni-icons type="contact" size="32" color="white" @tap="UserCenter"></uni-icons>
			 			<uni-icons type="plus" size="32" color="white" @tap="NewProject"></uni-icons>
			 		</view>			
			 	</view>
			 </view>
		</view>
		<view class="place"></view>
		<view class="tabbar">
			<view class="bgtab"></view>
			<view class="tab-title">
				<view @tap="createMoudle" :class="{active:btncontent == 0}">模块创建</view>
				<view @tap="process" :class="{active:btncontent == 1}">项目进度</view>
				<!-- <view @tap="change(2)" :class="{active:btncontent == 2}">历史项目</view> -->
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 0}">
			<view v-if="projectlist == ''">
				<text class="none">还没有创建项目哦~</text>
			</view>
			<view class="list">
				<view class="list-item-container">
					<view class="list-item-content pr60" v-for="item in projectlist" :key="item.id">
						<view class="project-left">
							<text class="title teamkpi">{{item.name}}</text>
						</view>
						<view class="list-content-right project-right">
							<!-- <button class="btngreen" @tap="NewBigModule(item)">创建大模块</button> -->
							<button class="btngreen" @tap="NewSmallModule(item)">创建模块</button>
						</view>
					</view>
				</view>
			</view>
			<!--创建好项目后，大模块负责人看到的界面，由大模块负责人创建小模块-->
			<!-- <view class="list">
				<view class="list-item-container">
					<view class="list-item-content pr60" v-for="item in bigmodulelist" :key="item.id">
						<view class="project-left">
							<text class="title teamkpi">{{item.name}}</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="NewSmallModule(item)">创建小模块</button>
						</view>
					</view>
				</view>
			</view> -->
			<!--创建大模块后，小模块负责人看到的界面，由小模块负责人创建工单-->
			<view class="list">
				<view class="list-item-container">
					<view class="list-item-content pr60" v-for="item in smallmodulelist" :key="item.id">
						<view class="project-left">
							<text class="title teamkpi">{{item.name}}</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="NewWorkSheet(item)">创建工单</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--项目进度-->
		<view class="tab-content" :class="{tab:btncontent == 1}">
			<view v-if="projectlist == ''">
				<text class="none">还没有创建项目哦~</text>
			</view>
			<view class="list">
				<view class="list-item-container rightlist">
					<view class="list-item-content" @tap="SmallModule(item)" v-for="item in projectlist" :key="item.id">
						<text class="title teamkpi">{{item.name}}</text>
						<uni-icons type="arrowright" size="20" color="#CCC" class="right lh"></uni-icons>
						<text class="righttext">已完成70%</text>
					</view>
				</view>
			</view>
		</view>
		
		<!--历史项目-->
		<!-- <view class="tab-content" :class="{tab:btncontent == 2}">
			<view class="list">
				<view class="list-item-container rightlist">
					<view class="list-item-content" @tap="BigModuleed">
						<text class="title teamkpi">老山禅 L001</text>
						<uni-icons type="arrowright" size="20" color="#CCC" class="right lh"></uni-icons>
						<text class="righttext">已完成</text>
					</view>
					<view class="list-item-content" @tap="BigModuleed">
						<text class="title teamkpi">芝麻官 Z002</text>
						<uni-icons type="arrowright" size="20" color="#CCC" class="right lh"></uni-icons>
						<text class="righttext">已终止</text>
					</view>
				</view>
			</view>
		</view> -->
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
				titleText:"项目管理",
				imgUrl:"../../../static/image/userface.png",
				btncontent: 0,
				bigmodulelist:[],
				projectlist:[],
				smallmodulelist:[],
				bigmoduleArr:[],
				smallmoduleArr:[]
			}
		},
		onShow() {
		   this.createMoudle();
		},
		methods: {
			createMoudle:function(item){
				this.btncontent = 0;
				this.axios.get('project/get_all')
					.then(res => {
						this.projectlist=res.data.data,
						this.bigmodulelist=[]
						this.smallmodulelist=[]
						console.log('projectlist:',this.projectlist)
						for(let i=0; i<this.projectlist.length; i++){//取id值
							// this.axios.get('module/get_all', {
							// 	params: {
							// 		'level_id': 0,
							// 		'project_id':this.projectlist[i].id
							// 	}
							// }).then(res => {
							// 	this.bigmoduleArr=res.data.data
								
							// 	for(let j=0;j<this.bigmoduleArr.length;j++){
							// 		this.bigmodulelist.push({
							// 			id:this.bigmoduleArr[j].id,
							// 			name:this.bigmoduleArr[j].name,
							// 			project:this.bigmoduleArr[j].project
							// 		})
							// 	}
							// 	console.log('bigmodulelist:',this.bigmodulelist)
							// })

							this.axios.get('module/get_all', {
								params: {
									'level_id': 1,
									'project_id':this.projectlist[i].id
								}
							}).then(res => {
								this.smallmoduleArr=res.data.data
								
								for(let k=0;k<this.smallmoduleArr.length;k++){
									this.smallmodulelist.push({
										id:this.smallmoduleArr[k].id,
										name:this.smallmoduleArr[k].name,
										project:this.smallmoduleArr[k].project
									})
								}
								console.log('smallmodulelist:',this.smallmodulelist)
							})
						}
						
					})
				
				
			},
			process:function(item){
				this.btncontent = 1;
				this.axios.get('project/get_all')
					.then(res => {
						this.projectlist=res.data.data,
						console.log('projectlist:',this.projectlist)
					})
			},
			change(e) {
			     this.btncontent = e;
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			BigModuleing: function(item) {
				var data ={
					'name':item.name,
					'id':item.id,
				}
				uni.navigateTo({
					url: 'bigmoduleing?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			SmallModule:function(item){
				var data ={
					'name':item.name,
					'id':item.id,
					//'pid':this.project_id
				}
				uni.navigateTo({
					url: 'smallmoduleing?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			BigModuleed: function() {
				uni.navigateTo({
					url: 'bigmoduleed',
				})
			},
			NewProject: function() {
				uni.navigateTo({
					url: 'newproject',
				})
			},
			NewSmallModule:function(item){
				var data ={
					'name':item.name,
					'id':item.id
					//'mid':item.id,
					//'pid':item.project.id
				}
				uni.navigateTo({
					url: 'newsmallmodule?item='+ encodeURIComponent(JSON.stringify(data)),
				})
			},
			NewBigModule:function(item){
				var data ={
					'name':item.name,
					'id':item.id,
				}
				uni.navigateTo({
					url: 'newbigmodule?item='+ encodeURIComponent(JSON.stringify(data)),
				})
			},
			NewWorkSheet:function(item){
				var data ={
					'mid':item.id,
					'pid':item.project.id
				}
				uni.navigateTo({
					url: 'newworksheet?item='+ encodeURIComponent(JSON.stringify(data))
				})
			}
		}
	}
</script>

<style>

</style>
