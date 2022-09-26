<template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist" @tap="TeamKPI">
				<view class="list-item-content">
					<text class="title teamkpi">金鹭</text>
					<text class="note">平面设计师</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="SmallModule">
				<view class="list-item-content">
					<text class="title teamkpi">印雪梅</text>
					<text class="note">客户经理</text>
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
				
			}
		},
		methods: {
			TeamKPI:function(){
				uni.navigateTo({
					url: 'teamkpi',
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
