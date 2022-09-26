<template>
	<view class="detail">
		<view class="form">
			<view class="form-item" @tap="Detail">
				<view class="title">新任务提醒</view>
				<view class="time">2020-06-10</view>
				<view class="textarea height">张小小给您分配了新任务，请及时查看！</view>
			</view>
			<view class="form-item" @tap="Detail">
				<view class="title">新任务提醒</view>
				<view class="time">2020-06-10</view>
				<view class="textarea height">张小小给您分配了新任务，请及时查看！</view>
			</view>
			<view class="form-item" @tap="Detail">
				<view class="title">新任务提醒</view>
				<view class="time">2020-06-10</view>
				<view class="textarea height">张小小给您分配了新任务，请及时查看！</view>
			</view>
			<view class="form-item" @tap="Detail">
				<view class="title">新任务提醒</view>
				<view class="time">2020-06-10</view>
				<view class="textarea height">张小小给您分配了新任务，请及时查看！</view>
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
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail',
				})
			}
		}
	}
</script>

<style>

</style>
