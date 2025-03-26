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
						<!-- <uni-icons type="contact" size="32" color="white" @tap="UserCenter"></uni-icons> -->
						<uni-icons type="plus" size="32" color="white" @tap="NewTask"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="place"></view>
		<view class="tabbar project">
			<view class="bgtab"></view>
			<view class="tab-title ">
				<view @tap="toassign" :class="{active:btncontent == 0}">待分配任务</view>
				<view @tap="assigned" :class="{active:btncontent == 1}">已分配任务</view>
				<view @tap="delayed" :class="{active:btncontent == 2}">延期任务</view>
			</view>
		</view>

		<view class="tab-content" :class="{tab:btncontent == 0}">
			<view class="list">
				<view class="list-item-container rightlist">
					<view v-if="tasklist == ''">
						<text class="none">暂时没有未分配任务哦~</text>
					</view>
					<view class="list-item-content" v-for="item in tasklist" :key="item.id">
						<view class="list-content-left project-left">
							<text class="title teamkpi">{{item.name}}</text>
						</view>
						<view class="list-content-right project-right">
							<button class="btngreen" @tap="AssignTask(item)">分配</button>
							<button class="btnblue" @tap="DelTask(item)">删除</button>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="tab-content" :class="{tab:btncontent == 1}">
			<view class="choicetime">
				<button class="calendar-button" type="button" @click="open" v-model="info.date">
					{{info.date}}
					<uni-icons type="arrowdown" size="12" color="#004343" class="pl20"></uni-icons>
				</button>
				<uni-calendar ref="calendar" :selected="info.selected" :showMonth="false" :date="info.date"
					:insert="false" :lunar="false" :range="false" @confirm="confirm" />
			</view>
			<view class="list-layout">
				<view class="list assign">
					<view class="list-item-container">
						<view v-if="taskdetail == ''">
							<text class="none">今日没有分配过的任务哦~</text>
						</view>
						<view class="list-item-content pr60 listheight" v-for="item in taskdetail" :key="item.id" @tap="Detail(item)">
							<view class="list-content-left">
								<text class="title">{{item.name}}</text>
								<view class="operator">To<text class="pl20">{{item.operator}}</text>
								</view>
							</view>
							<view class="list-content-middle">
								<text class="note">{{item.operator_finished}}</text>
								<text class="date grey">至{{item.end_at}}</text>
							</view>
							<view class="list-content-right">
								<view v-if="item.operator_finished == '已完成' || item.operator_finished == '已终止'">
									<button class="hidden" @tap.stop="EditTask(item)">修改</button>
								</view>
								<view v-if="item.operator_finished == '进行中'">
									<button class="btngreen" @tap.stop="EditTask(item)">修改</button>
								</view>
								<!-- <button :class="nowdate > item.start_at ? 'hidden':'btngreen'" @tap.stop="EditTask(item)">修改</button> -->
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 2}">
			
			<view class="list-layout delay">
				<view class="list assign">
					<view v-if="delaylist == ''">
						<text class="none">没有延期任务哦~</text>
					</view>
					<view class="list-item-content pr60 listheight" v-for="item in delaylist" :key="item.id" @tap="Detail(item)">
						<view class="list-content-left">
							<text class="title">{{item.name}}</text>
							<view class="operator">To<text class="pl20">{{item.operator}}</text>
							</view>
						</view>
						<view class="list-content-middle">
							<text class="note">已逾期{{getGraceDateBeforeNow(item.end_at)}}</text>
							<text class="date grey">至{{item.end_at}}</text>
						</view>
						<view class="list-content-right">
							<button class="btngreen" @tap.stop="EditTask(item)">修改</button>
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
	
	function getDateBeforeNow(stringTime) {
		//console.log("传参未格式化", stringTime);
		stringTime = new Date(stringTime.replace(/-/g, '/'))
	
		// 统一单位换算
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var week = day * 7;
		var month = day * 30;
		var year = month * 12;
	
		var time1 = new Date().getTime(); //当前的时间戳
		console.log("当前时间", time1);
	
		// 对时间进行毫秒单位转换
		var time2 = new Date(stringTime).getTime(); //指定时间的时间戳
	
		//console.log("传过来的时间", time2);
	
		var time = time1 - time2;
		//console.log("计算后的时间", time);
	
		var result = null;
		if (time < 0) {
		// alert("设置的时间不能早于当前时间！");
			result = stringTime;
		} else if (time / year >= 1) {
			result = parseInt(time / year) + "年";
		} else if (time / month >= 1) {
			result = parseInt(time / month) + "月";
		} else if (time / week >= 1) {
			result = parseInt(time / week) + "周";
		} else if (time / day >= 1) {
			result = parseInt(time / day) + "天";
		} else if (time / hour >= 1) {
			result = parseInt(time / hour) + "小时";
		} else if (time / minute >= 1) {
			result = parseInt(time / minute) + "分钟";
		} else {
			result = "刚刚";
		}
		//console.log("格式化后的时间", result);
		return result;
	}
	
	export default {
		components: {
			uniIcons,
			uniCalendar,
			uniList,
		},
		data() {
			return {
				titleText: "分配任务",
				imgUrl: "../../../static/image/userface.png",
				// imgUrl: "../../../static/image/userface2.png",
				showCalendar: true,
				info: {
					date: new Date().toISOString().slice(0, 10),
					selected: []
				},
				tasklist: [],
				btncontent: 0,
				screenWidth: 0,
				screenHeight: 0,
				dateHeight: '',
				taskdetail:[],
				finished:'',
				nowdate:new Date().toISOString().slice(0, 10),
				show:false,
				userid:'',
				delaylist:[]
			}
		},
		onShow() {
			this.assigned()
			this.toassign();
		},
		onLoad() {
			// var that = this;
			// uni.getSystemInfo({
			// 	success: function(res) {
			// 		this.screenWidth = res.screenWidth;
			// 		this.screenHeight = res.screenHeight;
			// 		that.dateHeight = this.screenHeight + "rpx";
			// 	}
			// });
			this.axios.get('profile/get').then(res => {
				this.userid = res.data.data.id;
			})
		},
		methods: {
			getGraceDateBeforeNow(date){
				return getDateBeforeNow(date)
			},
			reload() {
				const pages = getCurrentPages()
				const curPage = pages[pages.length - 1]
				curPage.onLoad(curPage.options) // 传入参数
				curPage.onShow()
				curPage.onReady()
			},
			open() {
				this.$refs.calendar.open()
			},
			confirm(e) {
				var choosetime = e.fulldate;
				this.info.date = choosetime;
				this.assigned()
			},
			delayed: function() {
				this.btncontent = 2;
				this.axios.get('task/delays', {
						params: {
							'user_id': this.userid
						}
					})
					.then(res => {
						this.delaylist = res.data.data
						console.log(this.delaylist)
					})
			},
			toassign: function() {
				this.btncontent = 0;
				this.axios.get('task/get_all', {
						params: {
							'is_assigned': false
						}
					})
					.then(res => {
						this.tasklist = res.data.data
						console.log(this.tasklist)
					})
			},
			assigned: function() {
				this.btncontent = 1;
				this.axios.get('task/get_all', {
						params: {
							'is_assigned': true,
							'start_at':this.info.date
						}
					})
					.then(res => {
						console.log(res.data.data)
						this.taskdetail=[] //让列表为空，否则列表会无限增加
						for(let i =0; i< res.data.data.length; i++){//取id值
							for(let j=0; j<res.data.data[i].task_items.length;j++){
								if(res.data.data[i].task_items[j].finished==true && res.data.data[i].task_items[j].stopped == false){
									this.finished='已完成'
								}else if(res.data.data[i].task_items[j].finished==true && res.data.data[i].task_items[j].stopped == true){
									this.finished='已终止'
								}else{
									this.finished='进行中'
								}
								this.taskdetail.push({
									id:res.data.data[i].id,
									name:res.data.data[i].name,
									end_at:res.data.data[i].end_at,
									start_at:res.data.data[i].start_at,
									finished:res.data.data[i].is_finished,
									operator_stoped:res.data.data[i].is_stoped,
									operator:res.data.data[i].task_items[j].operator.name,
									operator_finished:this.finished
								})
								//console.log('a:',this.taskdetail)
							}
						}
					})
			},
			DelTask: function(item) {
				let that = this
				uni.showModal({
					title: "提示",
					content: '确定删除此条任务吗？',
					success: function(res) {
						if (res.confirm) {
							that.axios.post('task/remove', {
								id: item.id
							}).then(res => {
								console.log(res)
								if (res.data.code == 200) {
									uni.showToast({
										title: '删除成功',
										icon: 'success',
									})
									setTimeout(function() {
										that.reload()
									}, 1000)
								} else {
									uni.showModal({
										content: res.data.message,
										confirmText: "知道了",
										showCancel: false
									})
								}
							})
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail',
				})
			},
			NewTask: function() {
				uni.navigateTo({
					url: 'newtask',
				})
			},
			AssignTask: function(item) {
				uni.navigateTo({
					url: 'assigntask?id=' + item.id,
				})
			},
			EditTask: function(item) {
				console.log(item.id)
				uni.navigateTo({
					url: 'edittask?id=' + item.id,
				})
			},
			Detail: function(item) {
				uni.navigateTo({
					url: '../task/detail?id=' + item.id,
				})
			}
		}
	}
</script>

<style>
	.operator{
		color: #999999;
		font-size: 24rpx;
	}
	.hidden{
		display: none !important;
	}
	.delay{
		margin-top: 0 !important;
	}
</style>
