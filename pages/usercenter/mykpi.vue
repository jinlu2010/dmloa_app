<template>
	<view class="mykpi">
		<view class="form">
			<view class="mykpi-title">{{username}} {{postname}}</view>
			<view class="mykpi-table">
				<view class="mykpi-table-row">
					<view>月度</view>
					<view>评分</view>
					<view>评级</view>
				</view>
				<view class="mykpi-table-row" v-for="item in mykpiList" :key="item.id">
					<view>{{item.date.slice(0,4)+'年'+item.date.slice(4,6)+'月'}}</view>
					<view>{{item.score+'分'}}</view>
					<view>{{item.level}}</view>
				</view>
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
				postname:'',
				mykpiList:[]
			}
		},
		onLoad(option) {
			const item = JSON.parse(decodeURIComponent(option.item))
			this.userid = item.userid
			this.username = item.username
			this.postname = item.postname
			
			this.axios.get('okr/score',{
				params: {
					'user_id': this.userid
				}
			}).then(res => {
				console.log(res.data.data)
				this.mykpiList = res.data.data
			})
		},
		methods: {
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail',
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #FFFFFF;
}
</style>
