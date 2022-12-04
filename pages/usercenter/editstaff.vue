<template>
	<view class="newtask">
		<form>
			<view class="form">
				<view class="form-item">
					<view class="title">身份</view>
					<radio-group @change="adminChange">
						<view class="btnradio">
							<radio id="普通员工" value="0" :checked="adminType == 0">普通员工</radio>
							<radio id="管理员" value="1" :checked="adminType == 1">管理员</radio>
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
							<radio id="男" value="0" :checked="gender_id == 0">男</radio>
							<radio id="女" value="1" :checked="gender_id == 1">女</radio>
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
							<radio id="是" value="true" :checked="is_manager == true">是</radio>
							<radio id="否" value="false" :checked="is_manager == false">否</radio>
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
						<textarea placeholder="请输入岗位技能" v-model="skillin" />
					</view>
				</view>
				<view class="form-item">
					<view class="title">岗外技能</view>
					<view class="textarea">
						<textarea placeholder="请输入岗外技能" v-model="skillout" />
					</view>
				</view>
			</view>
			<view class="btn">
				<button class="btngreen btnform" @click="addStaff()">保存</button>
			</view>
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
				user_id:'',
				name:'',
				gender_id:0,
				adminType:0,
				birthday: getDate({format: true}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				phone:'',
				email:'',
				dept:0,
				dept_id:0,
				deptArr: [],
				post:0,
				post_id:0,
				postArr: [],
				report:0,
				report_id:0,
				reportArr:[],
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
		onLoad(option) {
			this.userid = option.id
			this.axios.get('employee/get',{
				params: {
					'id': this.userid
				}
			}).then(res => {
				this.phone = res.data.data.account,
				this.dept = res.data.data.department.id,
				this.post = res.data.data.job.id,
				this.name = res.data.data.name,
				this.gender_id = res.data.data.gender,
				this.birthday = res.data.data.birthDay,
				this.email = res.data.data.email,
				this.status_id = res.data.data.status,
				this.skillin = res.data.data.jobSkill,
				this.skillout = res.data.data.skill,
				this.adminType = res.data.data.adminType,
				this.is_manager = res.data.data.manager
				if(res.data.data.leader == null){
					this.report = res.data.data.leader
				}else{
					this.report = res.data.data.leader.id
				};
				console.log(res.data.data)
				this.axios.get('department/get_all').then(res => {
					this.deptArr = res.data.data
					console.log('this.deptArr:',this.deptArr)
					let deptlist = this.deptArr
					this.dept_id = (deptlist).findIndex ((deptlist) => deptlist.id  ==  this.dept);
					this.reportArr=[] //让列表为空，否则列表会无限增加
					for(let i =0; i< res.data.data.length; i++){//取id值
						this.reportArr.push({
							id:res.data.data[i].manager.id,
							name:res.data.data[i].manager.name,
						})
					}
					let reportlist = this.reportArr
					this.report_id = (reportlist).findIndex ((reportlist) => reportlist.id  ==  this.report);
				})
				this.axios.get('job/get_all').then(res => {
					this.postArr = res.data.data
					let postlist = this.postArr
					this.post_id = (postlist).findIndex ((postlist) => postlist.id  ==  this.post);
				})
				// this.axios.get('employee/get_all').then(res => {
				// 	this.reportArr = res.data.data
				// 	let reportlist = this.reportArr
				// 	this.report_id = (reportlist).findIndex ((reportlist) => reportlist.id  ==  this.report);
				// })
			})
		},
		methods: {
			addStaff: function(){
				let data = {
					account:this.phone,
					company_id: 1,
					id:this.userid,
					department_id: this.deptArr[this.dept_id].id,
					job_id: this.postArr[this.post_id].id,
					name: this.name,
					birthDay: this.birthday,
					email: this.email,
					gender: this.gender_id,
					jobSkill: this.skillin,
					skill: this.skillout,
					status: this.status_id,
					superior_id: this.reportArr[this.report_id].id,
					adminType: this.adminType,
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
								content: '恭喜您，修改员工成功！',
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
			deptChange: function(e) {
				this.dept_id = e.detail.value
				this.report_id = e.detail.value
				this.axios.get('job/get_all',{
					params: {
						'department_id': this.deptArr[this.dept_id].id
					}
				}).then(res => {
					this.postArr = res.data.data
					this.post_id = 0
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
	.btn{
		padding-bottom: 40rpx;
	}
	.textarea{
		height: 200rpx;
	}
</style>
