<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">姓名</view>
				<view class="input">{{username}}</view>
			</view>
			<!-- <view class="form-item">
				<view class="title">员工编号</view>
				<view class="input">{{staffNo}}</view>
			</view> -->
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
			this.axios.get('employee/get',{
				params: {
					'id': this.userid
				}
			}).then(res => {
				console.log(res.data.data)
				this.phone = res.data.data.account,
				this.username = res.data.data.name,
				this.deptname = res.data.data.department.name,
				this.postname = res.data.data.job.name,
				this.email = res.data.data.email,
				this.skill = res.data.data.jobSkill,
				this.outskill = res.data.data.skill
			})
			
		},
		methods: {

		}
	}
</script>

<style>

</style>
