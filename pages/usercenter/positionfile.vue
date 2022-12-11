<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">岗位名称</view>
				<view class="textarea height">{{name}}</view>
			</view>
			<view class="form-item">
				<view class="title">岗位意义</view>
				<view class="textarea height">{{significance}}</view>
			</view>
			<view class="form-item">
				<view class="title">工作概要</view>
				<view class="textarea height">{{outline}}</view>
			</view>
			<view class="form-item">
				<view class="title">运营工作</view>
				<view class="textarea height">
					<view class="textarea-item" v-for="(item,index) in operateArr" :key="index">
						<text class="left">{{item.content}}</text><text class="right">{{item.score}}分</text>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">管理工作</view>
				<view class="textarea height">
					<view class="textarea-item" v-for="(item,index) in manageArr" :key="index">
						<text class="left">{{item.content}}</text><text class="right">{{item.score}}分</text>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">技能工作</view>
				<view class="textarea height">
					<view class="textarea-item" v-for="(item,index) in skillArr" :key="index">
						<text class="left">{{item.content}}</text><text class="right">{{item.score}}分</text>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">岗位权力</view>
				<view class="textarea height">{{power}}</view>
			</view>
			<view class="form-item">
				<view class="title">技能要求</view>
				<view class="textarea height">{{skill}}</view>
			</view>
			<view class="form-item">
				<view class="title">资产配置</view>
				<view class="textarea height">{{capital}}</view>
			</view>
			<view class="form-item">
				<view class="title">招聘要求</view>
				<view class="textarea height">{{recruit}}</view>
			</view>
			<view class="form-item">
				<view class="title">工作环境</view>
				<view class="textarea height">{{environment}}</view>
			</view>
			<view class="form-item">
				<view class="title">发展方向</view>
				<view class="textarea height">{{direction}}</view>
			</view>
			<view class="form-item">
				<view class="title">福利标准</view>
				<view class="textarea height">{{welfare}}</view>
			</view>
			<view class="form-item">
				<view class="title">淘汰标准</view>
				<view class="textarea height">{{eliminate}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post_id:'',
				name: '',
				capital: '',
				direction: '',
				eliminate: '',
				environment: '',
				manageArr: [],
				operateArr: [],
				outline: '',
				power: '',
				recruit: '',
				significance: '',
				skill: [],
				skillArr: [],
				welfare: ''
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
				this.name = res.data.data.name
				this.capital = res.data.data.capital 
				this.direction = res.data.data.direction
				this.eliminate = res.data.data.eliminate
				this.environment = res.data.data.environment
				this.manageArr = res.data.data.manageArr
				this.operateArr = res.data.data.operateArr
				this.outline = res.data.data.outline
				this.power = res.data.data.power
				this.recruit = res.data.data.recruit
				this.significance = res.data.data.significance
				this.skill = res.data.data.skill
				this.skillArr = res.data.data.skillArr
				this.welfare = res.data.data.welfare
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
