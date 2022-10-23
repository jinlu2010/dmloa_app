<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">姓名</view>
				<view class="input">{{username}}</view>
			</view>
			<view class="form-item">
				<view class="title">员工编号</view>
				<view class="input">{{staffNo}}</view>
			</view>
			<view class="form-item">
				<view class="title">部门</view>
				<view class="input">{{deptname}}</view>
			</view>
			<view class="form-item">
				<view class="title">岗位</view>
				<view class="input">{{postname}}</view>
			</view>
			<view class="form-item">
				<view class="title">手机</view>
				<view class="input">{{phone}}</view>
			</view>
			<view class="form-item">
				<view class="title">邮箱</view>
				<view class="input">{{email}}</view>
			</view>
			<view class="form-item">
				<view class="title">岗位技能</view>
				<view class="input">{{skill}}</view>
			</view>
			<view class="form-item">
				<view class="title">岗外技能</view>
				<view class="input">{{outskill}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid:'',
				username:'',
				dept_id:'',
				post_id:'',
				postname:'',
				deptname:'',
				phone:'',
				staffNo:'',
				email:'',
				skill:'',
				outskill:''
			}
		},
		onLoad(option){
			this.userid = option.id
			// this.axios.get('profile/get').then(res => {
			// 	this.username = res.data.data.name;
			// 	this.userid = res.data.data.id
			// 	console.log(res.data.data)
				
			// })
			this.axios.get('employee/get',{
				params: {
					'id': this.userid
				}
			}).then(res => {
				this.dept_id = res.data.data.departmentId,
				this.post_id = res.data.data.jobId,
				this.phone = res.data.data.account,
				this.axios.get('job/get',{
					params: {
						'id': this.post_id
					}
				}).then(res => {
					this.postname=res.data.data.name
				})
				this.axios.get('department/get',{
					params: {
						'id': this.dept_id
					}
				}).then(res => {
					this.deptname = res.data.data.name
				})
			})
			
		},
		methods: {

		}
	}
</script>

<style>

</style>
