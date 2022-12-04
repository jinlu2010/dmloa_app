<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">标题</view>
					<input v-model="name" class="input" value="确认色调"/>
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<picker @change="userArrChange" :value="index" :range="userArr" range-key="name" @click="userList">
						<view class="input">{{userArr[index].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<!-- <view class="form-item">
					<view class="title">截止</view>
					<picker mode="date" :value="end_at" :start="startDate" :end="endDate" @change="endDateChange">
						<view class="input">{{end_at}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view> -->
				<view class="form-item">
					<view class="title">项目周期</view>
					<view style="width: 280px;">
						<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" :border="false" :clearIcon="false"/>
					</view>
				</view>
				<view class="form-item">
					<view class="title">状态</view>
					<picker @change="statusArrChange" :value="status_id" :range="statusArr" range-key="name">
						<view class="input">{{statusArr[status_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
			</view>
			<view class="project-button">
				<button class="btngreen btnform" @click="addTask">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
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
		},
		data() {
			return {
				start_at: getDate({
					format: true
				}),
				end_at: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				name:'',
				user_id: 0,
				userArr: [{
					id: 0,
					name: '请选择',
				}],
				project_id:'',
				status_id:0,
				statusArr: [{
					id: 0,
					name: '正常'
				}, {
					id: 1,
					name: '紧急'
				}],
				module_id:'',
				father_id:'',
				index:0,
				task_id:'',
				user_ids:[],
				range:[]
			}
		},
		watch: {
			range(newval) {
				this.start_at = this.range[0]
				this.end_at = this.range[1]
			},
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.task_id = item.id
			this.module_id = item.mid
			this.project_id = item.pid
			this.axios.get('task/get', {
				params: {
					'id': this.task_id,
				}
			}).then(res => {
				console.log('tasklist:',res.data.data)
				this.name = res.data.data.name,
				//this.user_id=res.data.data.director.id,
				this.start_at=res.data.data.start_at,
				this.end_at=res.data.data.end_at,
				this.status_id=res.data.data.status_id
				this.range=[res.data.data.start_at,res.data.data.end_at]
				//this.project_id=res.data.data.project.id
				for(let i =0; i< res.data.data.task_items.length; i++){//取id值
					this.user_ids.push(JSON.stringify(res.data.data.task_items[i].operator.id))
					console.log('userid:',this.user_ids)
				}
			})
			this.axios.get('employee/get_all')
				.then(res => {
					this.userArr = res.data.data
					let userlist = this.userArr
					this.index = (userlist).findIndex ((userlist) => userlist.id  ==  1 );
				})
		},
		methods: {
			addTask: function() {
				let data = {
					operator_user_ids: this.user_ids,
					id:this.task_id,
					start_at: this.start_at,
					name: this.name,
					statusId: this.status_id,
					project_id: this.project_id,
					itself: false,
					end_at: this.end_at,
					//remark: this.remark,
					module_id: this.module_id,
					is_assigned: true
				}
				let task = JSON.stringify(data);
				console.log(task);
				let that = this
				this.axios.post('task/save', task)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，修改工单成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								showCancel:false,
								success: function(res) {
									if (res.confirm) {
										let pages = getCurrentPages();
										let beforePage = pages[pages.length-2];
										uni.navigateBack({
											delta: 1,
											// success:function(){
											//     beforePage['$vm'].refresh();
											// }
										});
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							})
						} else {
							uni.showModal({
								content: res.data.message,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
			},
			userList: function(e) {
				this.axios.get('employee/get_all')
					.then(res => {
						this.userArr = res.data.data
						console.log('user:',this.userArr)
					})
			},
			userArrChange: function(e) {
				this.index = e.detail.value
				console.log(e.detail.value)
			},
			statusArrChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.status_id = e.detail.value
			},
			startDateChange: function(e) {
				this.start_at = e.target.value
			},
			endDateChange: function(e) {
				this.end_at = e.target.value;
			}
		}
	}
</script>

<style>

</style>
