<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">标题</view>
					<input placeholder="请输入任务工单标题" class="input" v-model="name"/>
				</view>
				<view class="form-item">
					<view class="title">执行人</view>
					<picker @change="userArrChange" :value="user_id" :range="userArr" range-key="name" @click="userList">
						<view class="input">{{userArr[user_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">日期</view>
					<picker mode="date" :value="start_at" :start="startDate" :end="endDate" @change="startDateChange">
						<view class="input">{{start_at}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
							<text>至</text>
						</view>
					</picker>
					<picker mode="date" :value="end_at" :start="startDate" :end="endDate" @change="endDateChange">
						<view class="input">{{end_at}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
			</view>
			<button class="btngreen btnform" @click="addWorkSheet()">保存</button>
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
				show : false,
				start_at: getDate({
					format: true
				}),
				end_at: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				name:'',
				user_ids: [],
				user_id:0,
				userArr: [{
						id: 0,
						name: '请选择',
					}
				],
				project_id:'',
				moudle_id:'',
			}
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.project_id = item.pid
			this.moudle_id = item.mid
			
			this.axios.get('employee/get_all')
				.then(res => {
					this.userArr = res.data.data
					console.log('user:',this.userArr)
				})
		},
		methods: {
			addWorkSheet: function() {
				this.user_ids.push(JSON.stringify(this.userArr[this.user_id].id))
				let data = {
					operator_user_ids: this.user_ids,
					start_at: this.start_at,
					name: this.name,
					statusId: 0,
					project_id: this.project_id,
					itself: false,
					end_at: this.end_at,
					//remark: this.remark,
					module_id: this.moudle_id,
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
								content: '恭喜您，工单新建成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								cancelText:'再建一条',//这块是取消的文字
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack({
											delta: 1,
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
			// userList: function(e) {
			// 	this.axios.get('employee/get_all')
			// 		.then(res => {
			// 			this.userArr = res.data.data
			// 			console.log('user:',this.userArr)
			// 		})
			// },
			userArrChange: function(e) {
				this.user_id = e.detail.value
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
