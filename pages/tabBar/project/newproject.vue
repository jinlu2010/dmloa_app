<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">项目标题</view>
					<input v-model="name" placeholder="请输入项目标题" class="input"/>
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<picker @change="userArrChange" :value="user_id" :range="userArr" range-key="name" @click="userList">
						<view class="input">{{userArr[user_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">服务对象</view>
					<input placeholder="请输入服务对象" class="input" v-model="client"/>
				</view>
				<view class="form-item">
					<view class="title">服务目的</view>
					<input placeholder="请输入服务目的" class="input" v-model="purpose"/>
				</view>
				<view class="form-item">
					<view class="title">服务目标</view>
					<input placeholder="请输入服务目标" class="input" v-model="goal"/>
				</view>
				<!-- <view class="form-item">
					<view class="title">项目周期</view>
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
				</view> -->
				<view class="form-item">
					<view class="title">项目周期</view>
					<view style="width: 280px;">
						<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" :border="false" :clearIcon="false"/>
					</view>
				</view>
				<view class="form-item">
					<view class="title">项目状态</view>
					<picker @change="statusArrChange" :value="status_id" :range="statusArr" range-key="name">
						<view class="input">{{statusArr[status_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">对接人</view>
					<input placeholder="请输入对接人" class="input" v-model="contact"/>
				</view>
				<view class="form-item">
					<view class="title">项目预算</view>
					<input placeholder="请输入项目预算" class="input" v-model="budget"/>
				</view>
				<view class="form-item">
					<view class="title">验收标准</view>
					<input placeholder="请输入验收标准" class="input" v-model="standard"/>
				</view>
				<view class="form-item">
					<view class="title">相关介绍</view>
					<view class="textarea">
						<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入相关介绍" v-model="intro"/>
					</view>
				</view>
			</view>
			<button class="btngreen btnform" @click="addProject()">立即创建</button>
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
				user_id: 0,
				userArr: [{
						id: 0,
						name: '请选择',
					}
				],
				budget:'',
				client:'',
				contact:'',
				goal:'',
				intro:'',
				purpose:'',
				standard:'',
				status_id:0,
				statusArr: [{
					id: 0,
					name: '正常'
				}, {
					id: 1,
					name: '紧急'
				}],
				range:[]
			}
		},
		watch: {
			range(newval) {
				this.start_at = this.range[0]
				this.end_at = this.range[1]
			},
		},
		onLoad(){
			this.axios.get('employee/get_all')
				.then(res => {
					this.userArr = res.data.data
					console.log('user:',this.userArr)
				})
		},
		methods: {
			addProject: function() {
				let data = {
					director_user_id: this.userArr[this.user_id].id,
					name: this.name,
					//remark:this.remark,
					budget:this.budget,
					client:this.client,
					contact:this.contact,
					endAt:this.end_at,
					goal:this.goal,
					intro:this.intro,
					purpose:this.purpose,
					standard:this.standard,
					status:this.status_id
				}
				let project = JSON.stringify(data);
				console.log(project);
				this.axios.post('project/save', project)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，项目新建成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								cancelText:'再建一条',//这块是取消的文字
								success: function(res) {
									if (res.confirm) {
										uni.switchTab({
											url: 'project'
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
			statusArrChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.status_id = e.detail.value
			},
			startDateChange: function(e) {
				this.start_at = e.target.value
			},
			endDateChange: function(e) {
				this.end_at = e.target.value;
			},
			bindTextAreaBlur: function(e) {
				console.log(e.detail.value)
			},
			tapshow:function(){
				this.show = true
			},
			taphide:function(){
				this.show = false
			}
		}
	}
</script>

<style>

</style>
