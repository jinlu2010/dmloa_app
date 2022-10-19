<template>
	<view class="newtask">
		<form>
			<view class="form">
				<view class="form-item">
					<view class="title">任务标题</view>
					<input placeholder="请输入任务内容" class="input" v-model="name" />
				</view>
				<view class="form-item">
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
				</view>

				<view class="form-item">
					<view class="title">所属项目</view>
					<picker @change="projectArrChange" :value="project_id" :range="projectArr" range-key="name">
						<view class="input">{{projectArr[project_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
					<picker @change="moduleArrChange" :value="module_id" :range="moduleArr" range-key="name" >
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
							<radio id="自己" value="0">自己</radio>
							<radio id="他/多人" value="1">他/多人</radio>
						</view>
					</radio-group>
				</view>
				<view class="form-item other-radio" v-show="show">
					<view class="other-radio-item">
						<text>可执行人</text>
						<checkbox-group @change="executorChange">
							<label v-for="item in executorArr" :key="item.id">
								<view class="btnotherradio">
									<checkbox :value="JSON.stringify(item.id)" :checked="item.checked"></checkbox>
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
						<textarea auto-height placeholder="请输入注意事项" v-model="remark" />
					</view>
				</view>
			</view>
			<button class="btngreen btnform" @click="addTask()">立即分配</button>
			<text class="note pl60">注：如果只填写了任务标题，任务将会在待分配任务中显示。</text>
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
				user_ids: [], //执行人
				name: '',
				level_id: 0,
				user_type: '',
				module_id:'',
				is_assigned:'',
				
				executor: '',
				helper: '',
				remark: '',
				show: false,
				module_id:0,
				moduleArr:[],
				project_id:0,
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
					}
				],
				checkboxItems02: [{
						name: 'xuhuixiang',
						value: '徐会香',
					},
					{
						name: 'miaochong',
						value: '苗冲',
					},
					{
						name: 'zhangyuanfang',
						value: '张远方',
					}
				],
			}
		},
		created() {
			console.log(this.projectArr.length)
			if(this.projectArr.length == 0){
				this.disabled=true
			}else{
				this.disabled=false
			}
		},
		onLoad() {
			this.projectList()
		},
		methods: {
			addTask: function() {
				if(this.user_type === ''){
					this.is_assigned = false
				}else{
					this.is_assigned = true
				}
				//console.log(typeof(this.user_ids))
				let data = {
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
								content: '恭喜您，新建任务成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								cancelText:'再建一条',//这块是取消的文字
								success: function(res) {
									if (res.confirm) {
										uni.switchTab({
											url: 'assign'
										});
										console.log('用户点击确定');
									} else if (res.cancel) {
										that.name='',
										that.remark=''
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
			projectList: function(e) {
				this.axios.get('project/get_all').then(res => {
					this.projectArr = res.data.data
					this.axios.get('module/get_all',{
						params: {
							'level_id': 1,
							'project_id':this.projectArr[this.project_id].id
						}
					}).then(res => {
						this.moduleArr = res.data.data
						console.log('module:',this.moduleArr)
					})
				})
			},

			projectArrChange: function(e) {
				this.project_id = e.detail.value
				this.axios.get('module/get_all',{
					params: {
						'level_id': 1,
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
			levelArrChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.level_id = e.detail.value
			},
			startDateChange: function(e) {
				this.start_at = e.target.value
			},
			endDateChange: function(e) {
				this.end_at = e.target.value;
			},
			userTypeChange: function(e) {
				if(e.detail.value == 0){
					this.show = false,
					this.user_type = true,
					this.user_ids=[],
					this.executorArr=[]
				}else{
					this.show = true
					this.user_type = false
					this.axios.get('employee/get_all')
						.then(res => {
							this.executorArr = res.data.data
							console.log('user:',this.executorArr)
							/* if(res.data.data.length==0){
								uni.showModal({
									title:"提示",
									content:'抱歉，没有可执行人！',
									showCancel:false
								})
							}else{
								this.executorArr = res.data.data
								console.log('executor:',this.executorArr)
							} */
						})
				}
			},
			executorChange:function(e){
				this.user_ids=e.detail.value
				console.log('user_ids:',this.user_ids)
			}
		}
	}
</script>

<style>

</style>
