<template>
	<view class="newtask">
		<form>
			<view class="form">
				<view class="form-item">
					<view class="title">身份</view>
					<radio-group @change="adminChange">
						<view class="btnradio">
							<radio id="普通员工" value="0">普通员工</radio>
							<radio id="管理员" value="1">管理员</radio>
						</view>
					</radio-group>
				</view>
				<view class="form-item">
					<view class="title">姓名</view>
					<input placeholder="请输入姓名" class="input" v-model="name" />
				</view>
				<view class="form-item">
					<view class="title">性别</view>
					<radio-group @change="genderChange">
						<view class="btnradio">
							<radio id="女" value="0">女</radio>
							<radio id="男" value="1">男</radio>
						</view>
					</radio-group>
				</view>
				<view class="form-item">
					<view class="title">生日</view>
					<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="birthdayChange">
						<view class="input">{{birthday}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>

				<view class="form-item">
					<view class="title">手机</view>
					<input placeholder="请输入手机号码" class="input" v-model="phone" />
				</view>

				<view class="form-item">
					<view class="title">邮箱</view>
					<input placeholder="请输入邮箱" class="input" v-model="email" />
				</view>
				
				<view class="form-item">
					<view class="title">部门岗位</view>
					<picker @change="deptChange" :value="dept_id" :range="deptArr" range-key="name">
						<view class="input">{{deptArr[dept_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
					<picker @change="postChange" :value="post_id" :range="postArr" range-key="name">
						<view class="input">{{postArr[post_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				
				<view class="form-item">
					<view class="title">负责人</view>
					<radio-group @change="managerChange">
						<view class="btnradio">
							<radio id="是" value="true">是</radio>
							<radio id="否" value="false">否</radio>
						</view>
					</radio-group>
				</view>

				<view class="form-item">
					<view class="title">汇报对象</view>
					<picker @change="reportChange" :value="report_id" :range="reportArr" range-key="name">
						<view class="input">{{reportArr[report_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">在职状态</view>
					<picker @change="statusChange" :value="status_id" :range="statusArr" range-key="name">
						<view class="input">{{statusArr[status_id].name}}
							<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="form-item">
					<view class="title">岗位技能</view>
					<view class="textarea">
						<textarea @blur="skillinBlur" auto-height placeholder="请输入岗位技能" v-model="skillin" />
					</view>
				</view>
				<view class="form-item">
					<view class="title">岗外技能</view>
					<view class="textarea">
						<textarea @blur="skilloutBlur" auto-height placeholder="请输入岗外技能" v-model="skillout" />
					</view>
				</view>
			</view>
			<button class="btngreen btnform" @click="addStaff()">保存</button>
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
				name:'',
				gender_id:0,
				adminType:0,
				birthday: getDate({format: true}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				phone:'',
				email:'',
				dept_id:0,
				deptArr: [],
				post_id:0,
				postArr: [],
				report_id:0,
				reportArr:[{
					id: 0,
					name: '',
				}],
				status_id:1,
				statusArr:[{
					id: 0,
					name: '离职',
				},{
					id: 1,
					name: '在职',
				}],
				skillin:'',
				skillout:'',
				is_manager:false
			}
		},
		onLoad() {
			this.axios.get('department/get_all').then(res => {
				this.deptArr = res.data.data
				this.reportArr=[] //让列表为空，否则列表会无限增加
				for(let i =0; i< res.data.data.length; i++){//取id值
					this.reportArr.push({
						id:res.data.data[i].manager.id,
						name:res.data.data[i].manager.name,
					})
				}
				this.axios.get('job/get_all',{
					params: {
						'department_id': this.deptArr[this.dept_id].id
					}
				}).then(res => {
					this.postArr = res.data.data
				})
			})
			
			// this.axios.get('employee/get_all').then(res => {
			// 	this.reportArr = res.data.data
			// 	console.log('user:',this.reportArr)
			// })
		},
		methods: {
			addStaff: function(){
				let data = {
					account:this.phone,
					company_id: 1,
					department_id: this.deptArr[this.dept_id].id,
					job_id: this.postArr[this.post_id].id,
					name: this.name,
					birthDay: this.birthday,
					email: this.email,
					gender: this.gender_id,
					adminType: this.adminType,
					jobSkill: this.skillin,
					skill: this.skillout,
					status: this.status_id,
					superior_id: this.report_id,
					is_manager:this.is_manager
				}
				let staff = JSON.stringify(data);
				console.log(staff);
				let that = this
				this.axios.post('employee/save', staff)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，添加员工成功！',
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
			genderChange: function(e) {
				this.gender_id = e.detail.value
			},
			managerChange: function(e){
				this.is_manager = e.detail.value
			},
			adminChange: function(e) {
				this.adminType = e.detail.value
			},
			birthdayChange: function(e) {
				this.birthday = e.target.value
			},
			deptChange:function(e){
				this.dept_id = e.detail.value
				this.report_id = e.detail.value
				this.axios.get('job/get_all',{
					params: {
						'department_id': this.deptArr[this.dept_id].id
					}
				}).then(res => {
					this.postArr = res.data.data
				})
			},
			postChange: function(e) {
				this.post_id = e.detail.value
			},
			reportChange: function(e) {
				this.report_id = e.detail.value
			},
			statusChange:function(e){
				this.status_id = e.detail.value
			}
		}
	}
</script>

<style>

</style>
