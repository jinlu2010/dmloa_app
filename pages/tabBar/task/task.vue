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
						<!-- <button class="calendar-button" type="button" @tap="open">{{info.date}}</button>
						<uni-calendar ref="calendar" :selected="info.selected" :showMonth="false" :date="info.date"
							:insert="false" :lunar="false" :range="false" @confirm="confirm" />-->
					</view>
				</view>
			</view>
		</view>
		<view class="place"></view>
		<view class="bgcalendar"></view>
		<!-- this.$emit('changeDate', this.baseData.selectedDate); -->
		<calendar @changeDate="changeDate"></calendar>
		
		<view class="list task">
			<view class="list-item-container pt20">
				<view v-if="tasklist == ''">
					<text class="nonetask">今天没有安排任务哦~</text>
					<text class="nonetask">休息一下吧！</text>
				</view>
				<view class="list-item-content pr60 pt20 listheight" v-for="item in tasklist" :key="item.id" @tap="Detail(item)">
					<view class="list-content-left">
						<!-- <view class="dot">
							<view class="urgent"></view>
							<view class="full"></view>
						</view> -->
						<text class="title">{{item.name}}</text>
						<text class="note">From {{item.creator.name}}</text>
					</view>
					<view class="list-content-right" v-if="item.task_items[0].finished == false && item.task_items[0].stopped == false">
						<button class="btngreen" @tap.stop="tapshow(item)">进行中</button>
					</view>
					<view class="list-content-right">
						<image :src="item.task_items[0].stopped == true ? '../../../static/image/icon06.png': item.task_items[0].finished == true ? '../../../static/image/icon05.png':''"></image>
						<!-- <button class="btngreen" @tap.stop="tapshow(item)">进行中</button> -->
					</view>
				</view>
			</view>

			<!-- <view class="list-item-container" >
				<view class="list-item-content pr60 listheight pt20" @tap="Detail">
					<view class="list-content-left">
						<view class="dot">
							<view class="urgent"></view>
							<view class="full"></view>
						</view>
						<text class="title">品牌总监面试</text>
						<text class="note">From 徐会香</text>
					</view>
					<view class="list-content-right task-content-right">
						<button class="btngreen" @tap.stop="tapshow(item)">进行中</button>
					</view>
				</view>
				<view class="list-item-content pr60 listheight pt20" @tap="Detail">
					<view class="list-content-left">
						<view class="dot">
							<view class="urgent"></view>
							<view class="full"></view>
						</view>
						<text class="title">劳动节海报设计</text>
						<text class="note">From 金鹭</text>
					</view>
					<view class="list-content-right task-content-right">
						<image src="../../../static/image/icon05.png"></image>
					</view>
				</view>
			</view> -->
			
		</view>

		<view class="mask" v-show="show"></view>
		<view class="popup" v-show="show">
			<view class="popup-content">
				<form @submit="formSubmit" @reset="formReset" enctype="multipart/form-data">
					<view class="form pl40">
						<view class="form-item">
							<view class="title">完成状态</view>
							<picker @change="statusChange" :value="status_id" :range="status" range-key="name">
								<view class="input">{{status[status_id].name}}
									<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
								</view>
							</picker>
						</view>

						<view class="form-item" v-show="finish">
							<view class="title">任务耗时</view>
							<picker @change="timeChange" :value="time_id" :range="time" range-key="name">
								<view class="input">{{time[time_id].name}}分钟
									<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
								</view>
							</picker>
						</view>
						
						<view class="form-item" v-show="finish">
							<view class="title">上传文件</view>
							<!-- #ifdef H5 || MP-WEIXIN -->
							<!-- this.$emit('delFile', index) -->
							<uni-file-picker limit="2" file-mediatype="all" :auto-upload="false" ref="files" @select="upload" @delete="delFile"></uni-file-picker>
							<!-- #endif -->
						</view>

						<view class="form-item" v-show="delay">
							<view class="title">完成时间</view>
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="input">{{date}}
									<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
								</view>
							</picker>
						</view>

						<view class="form-item">
							<view class="title">备注说明</view>
							<view class="textarea popuptextarea">
								<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入内容" v-model="remark" />
							</view>
						</view>

						<button class="btnsubmit" @click="FinishTask">提交</button>
						<view class="cancle">
							<uni-icons type="closeempty" size="24" color="#999999" class="pl20" @tap="taphide">
							</uni-icons>
						</view>
					</view>
				</form>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import calendar from '@/components/calendar/calendar.vue'


	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}
	export default {
		components: {
			uniIcons,
			uniCalendar,
			uniList,
			calendar
		},
		data() {
			return {
				tasklist: [],
				titleText: "我的任务",
				imgUrl: "../../../static/image/userface.png",
				showCalendar: true,
				info: {
					date: new Date().toISOString().slice(0, 10),
					selected: []
				},
				windowWith: 0,
				windowHeight: 0,
				dateWidth: '',
				dateHeight: '',
				date: getDate({
					format: true
				}),

				startDate: getDate('start'),
				endDate: getDate('end'),
				show: false,
				finish: true,
				delay: false,
				stop: false,
				status: [{
					id: 0,
					name: '完成'
				}, {
					id: 1,
					name: '终止'
				}],
				status_id: 0,
				time: [{
					name: 60
				}, {
					name: 30
				}, {
					name: 10
				}],
				time_id: 0,
				title: 'uploadFile',
				remark: '',
				day: '',
				imageSrc: '',
				task_item_id: '',
				is_finished: false,
				is_stoped: false,
				upload_ids: [],
				files:[],
				upload_id:'',
				
				filePathsList:[],
				number:0
			}
		},
		onShow() {
			this.taskList()
		},
		onUnload() {
			this.imageSrc = '';
			this.filePathsList = '';
		},
		onLoad() {
			//let token = uni.getStorageSync('token')
			/* uni.request({
				method: 'get',
				url: 'http://47.100.125.167:8082/task/get_all',
				data: {
					'is_mine':true,
				},
				header: {
					'token': token,
					'content-type': 'application/json' // 默认值
				},
				success: (res) => {
					this.tasklist = res.data.data;
					console.log(this.tasklist)
				},
				fail: (err) => {
					console.log(err)
				}
			}) */
		},
		methods: {
			reload() {
				const pages = getCurrentPages()
				const curPage = pages[pages.length - 1]
				curPage.onLoad(curPage.options) // 传入参数
				curPage.onShow()
				curPage.onReady()
			},
			taskList(){
				this.axios.get('task/get_all', {
					params: {
						//'is_assigned': true,
						'is_mine':true,
						'start_at':this.date
					}
				}).then(res => {
					this.tasklist = res.data.data;
					console.log(this.tasklist)
				})
			},
			
			delFile(e){
				const index = this.filePathsList.findIndex(v => v === e.tempFile.path)
				this.upload_ids.splice(index,1)
			},
			upload(e) {
				let token = uni.getStorageSync('token')
				console.log(e.tempFilePaths)
				this.filePathsList=e.tempFilePaths
				for(let i=0;i<e.tempFilePaths.length;i++){
					uni.uploadFile({
						url: 'http://47.100.125.167:8082/api/upload',
						header: {
							'token': token,
						},
						filePath: e.tempFilePaths[i],
						name: 'file',
						success: (res) => {
							console.log('uploadImage success, res is:', res)
							this.upload_id = JSON.parse(res.data).data.id
							this.upload_ids.push(this.upload_id)
							this.number++ 
							console.log(this.upload_ids)
							uni.showToast({
								title: '上传第'+ this.number +'张成功',
								icon: 'success',
								duration: 1000
							})
						},
						fail: (err) => {
							uni.showModal({
								content: err,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
				}
			},
			open() {
				this.$refs.calendar.open()
			},
			changeDate(date) {
				this.date = date.ym
				console.log('date:', this.date)
				this.taskList();
			},
			
			confirm(e) {
				var choosetime = e.fulldate;
				this.info.date = choosetime;
			},
			statusChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.status_id = e.detail.value
				if (this.status_id == 0) {
					this.finish = true;
					this.stop = false;
				} else if (this.status_id == 1) {
					this.finish = false;
					this.stop = true;
				}
			},
			timeChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.time_id = e.detail.value
			},
			bindTextAreaBlur: function(e) {
				console.log(e.detail.value)
			},
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			FinishTask: function() {
				if(this.finish==true){
					this.axios.post('task/done', {
						file_ids: this.upload_ids,
						desc: this.remark,
						time: this.time[this.time_id].name,
						task_item_id: this.task_item_id,
					}).then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showToast({
								title: '已完成', 
							    icon: 'success',
							    duration: 1000,
							})
							this.show = false
							this.reload()
						} else {
							uni.showModal({
								content: res.data.message,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
				}else if(this.delay==true){
					this.axios.post('task/delay',{
						end_at:this.date,
						id: this.task_item_id,
					}).then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showToast({
								title: '已延期', 
							    icon: 'success',
							    duration: 1000,
							})
							this.show = false
							this.reload()
							} else {
								uni.showModal({
									content: res.data.message,
									confirmText: "知道了",
									showCancel: false
								})
							}
						})
				}else if(this.stop==true){
					this.axios.post('task/stop',{
						id: this.task_item_id,
						is_sub_task:true
					}).then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showToast({
								title: '已终止', 
							    icon: 'success',
							    duration: 1000,
							})
							this.show = false
							this.reload()
						} else {
							uni.showModal({
								content: res.data.message,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
					
					/* this.$request.post('task/stop', {
						id: this.task_item_id
					}).then(res => {
						console.log(res.data);
						if (res.data.code == 200) {
							uni.showToast({
								title: "已终止",
								duration: 2000
							})
							this.show = false
							location.reload()
						} else {
							this.message = res.data.message
							alert(this.message)
						}
					}) */
				}
			},
			tapshow: function(item) {
				this.show = true
				this.task_item_id= item.task_items[0].id
			},
			taphide: function() {
				this.show = false
			},
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			Detail: function(item) {
				uni.navigateTo({
					url: 'detail?id=' + item.id,
				})
			}
		}
	}
</script>

<style>	
	page {
		background-color: #FFFFFF;
	}

	/* .button {
		width: 130rpx;
		height: 70rpx;
		margin: 20rpx 0 0 0;
	}

	.image {
		width: 48rpx;
		height: 48rpx;
		margin: 40rpx 40rpx 0 0;
	} */
	.uni-file-picker{
		margin-top:16rpx
	}
</style>
