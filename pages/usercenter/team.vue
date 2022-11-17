<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist">
				<view class="list-item-content" @tap="MyKPI(item)" v-for="item in teamlist" :key="item.user.id">
					<text class="title teamkpi">{{item.user.name}}</text>
					<text class="note">{{item.user.job}}</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				teamlist:[],
				userid:'',
				username:'',
				postname:''
			}
		},
		onLoad() {
			this.axios.get('okr/get_all').then(res => {
				console.log(res.data.data)
				this.teamlist = res.data.data
			})
		},
		methods: {
			MyKPI:function(item){
				console.log(item)
				var data ={
					'userid':item.user.id,
					'username':item.user.name,
					'postname':item.user.job
				}
				console.log(data)
				uni.navigateTo({
					url: 'mykpi?item='+ encodeURIComponent(JSON.stringify(data))
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #EEEEEE;
	}
	uni-icons{
		line-height: 108rpx !important;
		height: 90rpx !important;
	}
</style>
