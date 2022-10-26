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
		 			</view>			
		 		</view>
		 	</view>
		</view>
		<view class="place"></view>
		<view class="tabbar">
			<view class="bgtab"></view>
			<view class="tab-title">
				<view @tap="teamList" :class="{active:btncontent == 0}">团队绩效</view>
				<view @tap="myList" :class="{active:btncontent == 1}">我的绩效</view>
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 0}">
			<view class="choicetime">
				<button class="calendar-button" type="button" @tap="open">{{info.date}}<uni-icons type="arrowdown" size="12" color="#004343" class="pl20"></uni-icons></button>
				<uni-calendar ref="calendar" :selected="info.selected" :showMonth="false" :date="info.date" :insert="false" :lunar="false" :range="false" @confirm="confirm" />
			</view>
			
			<view class="team-layout">
				<view class="team" v-for="(item,i) in teamlist" :key="i">
					<view class="team-title">0{{i+1}} {{item.user.name}} {{item.user.department}}-{{item.user.job}}</view>
					<view class="team-item-container" v-if="item.tasks == ''">
						<text class="nonetask">今天没有任务哦~</text>
					</view>
					<view class="team-item-container" @tap="Detail" v-for="task in item.tasks" :key="task.id">
						<view class="team-item-content">
							<view class="list-content-left">
								<text class="title">{{task.name}}</text>
								<text class="note">From {{task.creator.name}}</text>
							</view>
							<view class="list-content-middle">
								<text class="note">{{task.finished == false ? '进行中' : task.delayed == false ? '正常完成' : '延期完成'}}</text>
								<text class="number blue">{{task.score == 0 ? '' : '+'+task.score+' 分'}}</text>
							</view>
							<view class="list-content-right" v-if="task.finished == true && task.marking == false">
								<button class="btngreen mr10" @tap.stop="tapshow(item)">评分</button>
							</view>
							<view class="list-content-right" v-if="task.marking == true && task.finished == true">
								<image src="../../../static/image/icon05.png" class="image"></image>
							</view>
							<view class="list-content-right" v-if="task.marking == false && task.finished == false">
								<image src="../../../static/image/icon08.png" class="image"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="mask" v-show="show"></view>
			<view class="popup" v-show="show">
				<view class="popup-content">
					<form @submit="formSubmit" @reset="formReset">
						<view class="form pl40">
							<view class="form-item">
								<view class="title">任务评分</view>
								<picker @change="scoreChange" :value="score_id" :range="score" range-key="name">
									<view class="input">{{score[score_id].name}}
										<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
									</view>
								</picker>
							</view>
							<view class="form-item">
								<view class="title">指导意见</view>
								<view class="textarea popuptextarea">
									<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入内容" v-model="remark"/>
								</view>
							</view>
							
							<button class="btngreen btnsubmit" @click="FinishCheck">提交</button>
							<view class="cancle">
								<uni-icons type="closeempty" size="24" color="#999999" class="pl20"  @tap="taphide"></uni-icons>
							</view>
						</view>
					</form>
				</view>
			</view>
		</view>
		
		
		<view class="tab-content" :class="{tab:btncontent == 1}">
			<!-- <text class="mycheck-date">2020年03月</text> -->
			<view class="list">
				<view class="list-item-container" v-for="item in mylist" :key="item.id">
					<view class="list-item-content pr60 pt20 listheight" @tap="Detail">
						<view class="list-content-left">
							<text class="title">{{item.name}}</text>
							<text class="note">{{item.marking_at.slice(5,10)}} From {{item.operator.name}}</text>
						</view>
						<view class="list-content-right">
							<text class="h1 lh120">+{{item.score}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	
	export default {
		components: {
			uniIcons,
			uniCalendar,
			uniList,
		},
		data() {
			return {
				titleText:"绩效考核",
				imgUrl:"../../../static/image/userface.png",
				showCalendar: true,
				info: {
					date: new Date().toISOString().slice(0, 10),
					selected: []
				},
				windowWith:0,
				windowHeight:0,
				dateWidth:'',
				btncontent: 0,
				show : false,
				score_id: 0,
				score: [{name:'未执行0分',value:0},{name: '不满意3分',value:3}, {name:'基本满意8分',value:8}, {name:'非常满意10分',value:10}],
				index: 2,
				teamlist:[],
				finished:'',
				task_id:'',
				remark:'',
				mylist:[]
			}
		},
		onShow() {
			this.teamList()
		},
		onLoad(){

		},
		methods: {
			reload() {
				const pages = getCurrentPages()
				const curPage = pages[pages.length - 1]
				curPage.onLoad(curPage.options) // 传入参数
				curPage.onShow()
				curPage.onReady()
			},
			teamList(){
				this.btncontent = 0;
				this.axios.get('okr/get_all',{
					params: {
						'start_at':this.info.date
						//'id': this.userid
					}
				}).then(res => {
					console.log(res.data.data)
					this.teamlist = res.data.data
				})
			},
			myList(){
				this.btncontent = 1;
				this.axios.get('okr/my',{
					params: {
						//'start_at':this.info.date
					}
				}).then(res => {
					this.mylist = res.data.data
					console.log('mylist:',this.mylist)
				})
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail01',
				})
			},
			open() {
				this.$refs.calendar.open()
			},
			confirm(e) {
				var choosetime=e.fulldate;
				this.info.date=choosetime;
				this.teamList();
			},
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
			},
			tapshow:function(item){
				this.show = true
				this.task_id= item.tasks[0].id
			},
			taphide:function(){
				this.show = false
			},
			scoreChange: function(e) {
				this.score_id = e.detail.value
			},
			FinishCheck: function() {
				this.axios.post('okr/score', {
					id: this.task_id,
					remark: this.remark,
					score: this.score[this.score_id].value,
				}).then(res => {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: '已完成', 
						    icon: 'success',
						    duration: 1000,
						})
						this.show = false
					} else {
						uni.showModal({
							content: res.data.message,
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
	.nonetask{
		font-size: 28rpx;
		text-align: center;
		line-height: 120rpx;
		color: #999999;
		display: block;
	}
	.lh120{
		line-height: 120rpx;
	}
	
</style>
