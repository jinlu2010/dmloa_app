<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="title">标题</view>
					<input placeholder="请输入小模块标题" class="input" v-model="name" />
				</view>
				<view class="form-item">
					<view class="title">负责人</view>
					<picker @change="userArrChange" :value="user_id" :range="userArr" range-key="name" @click="userList">
						<view class="input">{{userArr[user_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<!-- <view class="form-item">
					<view class="title">日期</view>
					<picker mode="date" :value="start_at" :start="startDate" :end="endDate" @change="bindDateChange1">
						<view class="input">{{start_at}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
							<text>至</text>
						</view>
					</picker>
					<picker mode="date" :value="end_at" :start="startDate" :end="endDate" @change="bindDateChange2">
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
			</view>
			<button class="btngreen btnform" @click="addSmallModule()">保存</button>
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
				project_id:'',
				project_name:'',
				moudle_id:'',
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
			const item = JSON.parse(decodeURIComponent(option.item));
			this.project_id = item.pid
			this.module_name = item.name
			this.moudle_id = item.mid
			
			this.axios.get('employee/get_all')
				.then(res => {
					this.userArr = res.data.data
					console.log('user:',this.userArr)
				})
		},
		methods: {
			addSmallModule: function() {
				let data = {
					director_user_id: this.userArr[this.user_id].id,
					end_at:this.end_at,
					start_at:this.start_at,
					father_id:this.moudle_id,
					level:1,
					project_id:this.project_id,
					name: this.module_name + '-' + this.name,
				}
				let smodule = JSON.stringify(data);
				console.log(smodule);
				this.axios.post('module/save', smodule)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，项目小模块新建成功！',
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
			}
		}
	}
</script>

<style>

</style>
