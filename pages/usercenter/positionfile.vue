<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">岗位意义</view>
				<view class="textarea height">下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。</view>
			</view>
			<view class="form-item">
				<view class="title">工作概要</view>
				<view class="textarea height">面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。</view>
			</view>
			<view class="form-item">
				<view class="title">运营工作</view>
				<view class="textarea height">
					<view class="textarea-item"><text class="left">制定并汇报工作计划</text><text class="right">1-2分</text></view>
					<view class="textarea-item"><text class="left">向上级总结汇报</text><text class="right">1-2分</text></view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">管理工作</view>
				<view class="textarea height">
					<view class="textarea-item"><text class="left">阅读、审核和优化下属工作计划</text><text class="right">1-3分</text></view>
					<view class="textarea-item"><text class="left">阅读和指导下属总结汇报</text><text class="right">1-3分</text></view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">技能工作</view>
				<view class="textarea height">
					<view class="textarea-item"><text class="left">根据公司年度推广计划，制定年度新媒体推广方案及预算</text><text class="right">1-2分</text></view>
					<view class="textarea-item">向上级总结汇报<text class="right">1-2分</text></view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">岗位权限</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">技能要求</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">资产配置</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">招聘要求</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">工作环境</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">发展方向</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">福利标准</view>
				<view class="textarea height">无</view>
			</view>
			<view class="form-item">
				<view class="title">淘汰标准</view>
				<view class="textarea height">无</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post_id:'',
				postname:''
			}
		},
		onLoad(option){
			this.post_id = option.id
			console.log(this.post_id)
			this.axios.get('job/get',{
				params: {
					'id': this.post_id
				}
			}).then(res => {
				this.postname=res.data.data.name
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
