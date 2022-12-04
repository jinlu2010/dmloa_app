<template>
	<view class="newtask">
		<form>
			<view class="form">
				<view class="form-item">
					<view class="title">任务标题</view>
					<input placeholder="请输入任务内容" class="input" v-model="name" />
				</view>
				<!-- <view class="form-item">
					<view class="title">开始时间</view>
					<picker mode="date" :value="start_at" :start="startDate" :end="endDate" @change="startDateChange">
						<view class="input">{{start_at}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">完成时间</view>
					<picker mode="date" :value="end_at" :start="startDate" :end="endDate" @change="endDateChange">
						<view class="input">{{end_at}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view> -->
				<view class="form-item">
					<view class="title">任务周期</view>
					<view style="width: 280px;">
						<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" :border="false" :clearIcon="false"/>
					</view>
				</view>
				<view class="form-item">
					<view class="title">所属项目</view>
					<picker @change="projectArrChange" :value="project_id" :range="projectArr" range-key="name">
						<view class="input">{{projectArr[project_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
					<picker @change="moduleArrChange" :value="module_id" :range="moduleArr" range-key="name" @click="moduleList">
						<view class="input">{{moduleArr[module_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
		
				<view class="form-item">
					<view class="title">紧急程度</view>
					<picker @change="levelArrChange" :value="level_id" :range="levelArr" range-key="name">
						<view class="input">{{levelArr[level_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
		
				<view class="form-item">
					<view class="title">执行人</view>
					<radio-group @change="userTypeChange">
						<view class="btnradio">
							<radio id="自己" value="0" :checked="user_type == true">自己</radio>
							<radio id="他/多人" value="1" :checked="user_type == false">他/多人</radio>
						</view>
					</radio-group>
				</view>
				<view class="form-item other-radio" v-show="show">
					<view class="other-radio-item">
						<text>可执行人</text>
						<checkbox-group @change="executorChange">
							<label v-for="(item,index) in executorArr" :key="index">
								<view class="btnotherradio">
									<checkbox :value="JSON.stringify(item.id)" :checked="user_ids[index] == item.id ? true:false"></checkbox>
								</view>
								<view class="btnotherradio mr30">{{item.name}}</view>
							</label>
						</checkbox-group>
						<!-- <text>请其协助</text>
						<checkbox-group @change="checkboxChange">
							<label v-for="item in checkboxItems02" :key="item.name">
								<view class="btnotherradio">
									<checkbox :value="item.name" :checked="item.checked"></checkbox>
								</view>
								<view class="btnotherradio mr30">{{item.value}}</view>
							</label>
						</checkbox-group> -->
					</view>
				</view>
		
				<view class="form-item">
					<view class="title">特别提醒</view>
					<view class="textarea">
						<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入注意事项" v-model="remark" />
					</view>
				</view>
			</view>
			<button class="btngreen btnform" @click="addTask()">保存</button>
			<button class="btnblue border100 mr60 mb20" @click="stopTask()">终止</button>
			<button class="btngrey border100 mr60" @click="delTask()">删除</button>
		</form>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'	
	
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
				task_id:'',
				
				user_ids: [], //执行人
				name: '',
				level_id: 0,
				project_id: 0,
				user_type: '',
				is_assigned:'',
				
				executor: '',
				helper: '',
				remark: '',
				show: false,
				project:'',
				module:'',
				module_id:0,
				moduleArr:[],
				index:0,
				projectArr: [{
					id: 0,
					name: '无项目',
				}],
				disabled:false,
				levelArr: [{
					id: 0,
					name: '正常'
				}, {
					id: 1,
					name: '紧急'
				}],
				start_at: getDate({
					format: true
				}),
				end_at: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				executorArr: [{
					id: 0,
					name: '',
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
		onLoad(option){
			this.task_id = option.id
			this.axios.get('employee/get_all')
			.then(res => {
				this.executorArr = res.data.data
				console.log('执行人：',this.executorArr)
			})

			this.axios.get('task/get', {
				params: {
					'id': this.task_id
				}
			}).then(res => {
				console.log(res.data.data)
				this.name = res.data.data.name,
				this.level_id = res.data.data.status_id,
				this.project = res.data.data.project.id,
				this.module =res.data.data.module.id,
				this.user_type = res.data.data.itself,
				this.remark=res.data.data.remark,
				// this.start_at=res.data.data.start_at,
				// this.end_at=res.data.data.end_at,
				this.range = [res.data.data.start_at,res.data.data.end_at]
				
				this.axios.get('project/get_all').then(res => {
					this.projectArr = res.data.data
					let projectlist = this.projectArr
					this.project_id = (projectlist).findIndex ((projectlist) => projectlist.id  ==  this.project );
				})
				this.axios.get('module/get_all',{
					params: {
						//'level_id': 1,
						'project_id':this.project
					}
				}).then(res => {
					this.moduleArr = res.data.data
					let modulelist = this.moduleArr
					this.module_id = (modulelist).findIndex ((modulelist) => modulelist.id  ==  this.module );
				})
				
				if(this.user_type == true){
					this.show = false
				}else{
					this.show = true
				}
				for(let i =0; i< res.data.data.task_items.length; i++){//取id值
					this.user_ids.push(JSON.stringify(res.data.data.task_items[i].operator.id))
					console.log('userid:',this.user_ids)
				}
			})
			
		},
		methods: {
			addTask: function() {
				if(this.user_type === ''){
					this.is_assigned = false
				}else{
					this.is_assigned = true
				}
				let data = {
					id: this.task_id,
					operator_user_ids: this.user_ids,
					start_at: this.start_at,
					name: this.name,
					statusId: this.level_id,
					project_id: this.projectArr[this.project_id].id,
					itself: this.user_type,
					end_at: this.end_at,
					remark: this.remark,
					module_id: this.moduleArr[this.module_id].id,
					is_assigned: this.is_assigned
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
								content: '恭喜您，修改任务成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								showCancel:false,
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
			stopTask:function(){
				this.axios.post('task/stop',{
					id: this.task_id,
					is_sub_task:false
				}).then(res => {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: '已终止', 
						    icon: 'success',
						    duration: 1000,
						})
						uni.navigateBack({
							delta: 1,
						});
					} else {
						uni.showModal({
							content: res.data.message,
							confirmText: "知道了",
							showCancel: false
						})
					}
				})
			},
			delTask: function() {
				let that = this
				uni.showModal({
					title: "提示",
					content: '确定删除此条任务吗？',
					success: function(res) {
						if (res.confirm) {
							that.axios.post('task/remove', {
								id:that.task_id,
							}).then(res => {
								console.log(res)
								if (res.data.code == 200) {
									uni.showToast({
										title: '删除成功',
										icon: 'success',
									})
									setTimeout(function() {
										//that.reload()
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
			levelArrChange: function(e) {
				this.level_id = e.detail.value
			},
			startDateChange: function(e) {
				this.start_at = e.target.value
			},
			endDateChange: function(e) {
				this.end_at = e.target.value;
			},
			userTypeChange: function(e) {
				if(e.detail.value==0){
					this.show = false,
					this.user_type = true,
					this.user_ids=[],
					this.executorArr=[]
				}else{
					this.show = true
					this.user_type = false;
					this.axios.get('employee/get_all')
					.then(res => {
						this.executorArr = res.data.data
					})
				}
			},
			executorChange:function(e){
				this.user_ids=e.detail.value
			},
			bindTextAreaBlur: function(e) {
				console.log(e.detail.value)
			},
			projectList: function(e) {
				this.axios.get('project/get_all').then(res => {
					this.projectArr = res.data.data
					this.axios.get('module/get_all',{
						params: {
							//'level_id': 1,
							'project_id':this.projectArr[this.project_id].id
						}
					}).then(res => {
						this.moduleArr = res.data.data
					})
				})
			},

			projectArrChange: function(e) {
				this.project_id = e.detail.value
				this.axios.get('module/get_all',{
					params: {
						//'level_id': 1,
						'project_id':this.projectArr[this.project_id].id
					}
				}).then(res => {
					this.moduleArr = res.data.data
					console.log('module:',this.moduleArr)
				})
			},
			moduleArrChange: function(e) {
				this.module_id = e.detail.value
			},
		}
	}
</script>

<style>

</style>
