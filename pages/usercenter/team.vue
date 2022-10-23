<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist">
				<view class="list-item-content" v-for="item in teamlist" :key="item.id" @tap="MyKPI(item)">
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
				var data ={
					'userid':item.user.userid,
					'username':item.user.username,
					'postname':item.user.postname
				}
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
		line-height: 110rpx !important;
		height: 110rpx !important;
	}
</style>
