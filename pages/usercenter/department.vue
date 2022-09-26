<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">部门意义</view>
				<view class="textarea height">下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。</view>
			</view>
			<view class="form-item">
				<view class="title">战略目标</view>
				<view class="textarea height">面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。</view>
			</view>
			<view class="form-item">
				<view class="title">部门目标</view>
				<view class="textarea height">面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。</view>
			</view>
			<view class="form-item">
				<view class="title">部门职能</view>
				<view class="textarea height">
					<view class="textarea-item">一级职能</view>
					<view class="textarea-item dot">二级职能</view>
					<view class="textarea-item dot">二级职能</view>
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
				dept_name:''
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
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
