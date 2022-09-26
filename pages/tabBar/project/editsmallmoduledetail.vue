<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">标题</view>
					<input v-model="name" class="input" value="Logo设计"/>
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<picker @change="userArrChange" :value="index" :range="userArr" range-key="name">
						<view class="input">{{userArr[index].name}}
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
				<button class="btngreen btnform" @click="addSmallModule">保存</button>
				<button class="btnblue btnform" @click="DelSmallModule">删除</button>
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
			}
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.module_id = item.id
			this.father_id = item.mid
			this.axios.get('module/get', {
				params: {
					'id': this.module_id,
				}
			}).then(res => {
				console.log(res.data.data)
				this.name = res.data.data.name,
				this.user_id=res.data.data.director.id,
				this.start_at=res.data.data.start_at,
				this.end_at=res.data.data.end_at,
				this.project_id=res.data.data.project.id
			})
			
			this.axios.get('employee/get_all')
				.then(res => {
					this.userArr = res.data.data
					let userlist = this.userArr
					this.index = (userlist).findIndex ((userlist) => userlist. id  ==  this.user_id );
				})
		},
		methods: {
			addSmallModule: function() {
				let data = {
					director_user_id: this.userArr[this.index].id,
					end_at:this.end_at,
					start_at:this.start_at,
					father_id:this.father_id,
					level:1,
					project_id:this.project_id,
					name: this.name,
					id:this.module_id
				}
				let smodule = JSON.stringify(data);
				console.log(smodule);
				this.axios.post('module/save', smodule)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，项目小模块修改成功！',
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
			},
			DelSmallModule:function(){
				let data ={
					id: this.module_id,
				}
				let remove_id = JSON.stringify(data);
				let that = this
				uni.showModal({
					title: "提示",
					content: '确定删除此小模块吗？',
					success: function(res) {
						if (res.confirm) {
							that.axios.post('module/remove', remove_id)
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
