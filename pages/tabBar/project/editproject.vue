<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">项目标题</view>
					<input class="input" v-model="name"/>
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<picker @change="userArrChange" :value="user_index" :range="userArr" range-key="name" @click="userList">
						<view class="input">{{userArr[user_index].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">服务对象</view>
					<input class="input" v-model="client"/>
				</view>
				<view class="form-item">
					<view class="title">服务目的</view>
					<input class="input" v-model="purpose"/>
				</view>
				<view class="form-item">
					<view class="title">服务目标</view>
					<input class="input" v-model="goal"/>
				</view>
				<view class="form-item">
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
					<input class="input" v-model="contact"/>
				</view>
				<view class="form-item">
					<view class="title">项目预算</view>
					<input class="input" v-model="budget"/>
				</view>
				<view class="form-item">
					<view class="title">验收标准</view>
					<input class="input" v-model="standard"/>
				</view>
				<view class="form-item">
					<view class="title">相关介绍</view>
					<view class="textarea">
						<textarea @blur="bindTextAreaBlur" auto-height v-model="intro"/>
					</view>
				</view>
			</view>
			<view class="project-button">
				<button class="btngreen btnform" @click="addProject()">保存</button>
				<button class="btnblue btnform" @click="delProject()">删除</button>
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
				project_id:'',
				user_index:''
			}
		},
		onLoad(option){
			this.project_id = option.id
			this.axios.get('project/get', {
					params: {
						'id':this.project_id
					}
				})
				.then(res => {
					console.log(res.data.data)
					this.name = res.data.data.name,
					this.user_id = res.data.data.director.id,
					console.log(this.user_id)
					this.status_id = 0,
					this.start_at = "2022-05-01",
					this.end_at = "2022-05-31"
				})
				
			this.axios.get('employee/get_all')
				.then(res => {
					this.userArr = res.data.data
					let userlist = this.userArr
					this.user_index = (userlist).findIndex ((userlist) => userlist. id  ==  this.user_id );
				})
		},
		methods: {
			addProject: function() {
				let data = {
					director_user_id: this.userArr[this.user_index].id,
					name: this.name,
					budget:this.budget,
					client:this.client,
					contact:this.contact,
					endAt:this.end_at,
					goal:this.goal,
					intro:this.intro,
					purpose:this.purpose,
					standard:this.standard,
					status:this.status_id,
					id:this.project_id
				}
				let project = JSON.stringify(data);
				console.log(project);
				this.axios.post('project/save', project)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，修改项目成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								showCancel:false,
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack({
											delta: 1
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
				this.user_index = e.detail.value
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
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
			},
			tapshow:function(){
				this.show = true
			},
			taphide:function(){
				this.show = false
			},
			NewBigModule:function(){
				uni.navigateTo({
					url: 'newbigmodule',
				})
			},
			EditBigModule:function(){
				uni.navigateTo({
					url: 'editbigmodule',
				})
			},
			delProject:function(){
				let data ={
					id: this.project_id,
				}
				let remove_id = JSON.stringify(data);
				let that = this
				uni.showModal({
					title: "提示",
					content: '确定删除此项目吗？',
					success: function(res) {
						if (res.confirm) {
							that.axios.post('project/remove', remove_id)
								.then(res => {
									console.log(res)
									if (res.data.code == 200) {
										uni.showToast({
											title: '删除成功',
											icon: 'success',
										})
										setTimeout(function() {
											uni.switchTab({
												url: 'project'
											})
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
			}
		}
	}
</script>

<style>

</style>
