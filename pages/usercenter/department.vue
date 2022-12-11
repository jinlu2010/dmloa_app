<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">部门名称</view>
				<view class="textarea height" v-model="dept_name">{{dept_name}}</view>
			</view>
			<view class="form-item">
				<view class="title">部门意义</view>
				<view class="textarea height" v-model="dept_significance">{{dept_significance}}</view>
			</view>
			
			<view class="form-item">
				<view class="title">部门目标</view>
				<view class="textarea height" v-model="dept_goal">{{dept_goal}}</view>
			</view>
			<view class="form-item">
				<view class="title">部门职能</view>
				<view class="textarea height" v-model="dept_duty">{{dept_goal}}
					<!-- <view class="textarea-item">一级职能</view>
					<view class="textarea-item dot">二级职能</view>
					<view class="textarea-item dot">二级职能</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dept_id:'',
				dept_name:'',
				dept_significance:'',
				dept_duty:'',
				dept_goal:''
			}
		},
		onLoad(option){
			this.dept_id = option.id
			console.log(this.dept_id)
			this.axios.get('department/get',{
				params: {
					'id': this.dept_id
				}
			}).then(res => {
				this.dept_name = res.data.data.name
				this.dept_significance = res.data.data.significance
				this.dept_duty = res.data.data.dept_duty
				this.dept_goal = res.data.data.goal
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
