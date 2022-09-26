<template>
	<view class="mykpi">
		<view class="form">
			<view class="mykpi-title">金鹭 平面设计师</view>
			<view class="mykpi-table">
				<view class="mykpi-table-row">
					<view>月度</view>
					<view>评分</view>
					<view>评级</view>
				</view>
				<view class="mykpi-table-row">
					<view>2020年01月</view>
					<view>500分</view>
					<view>B</view>
				</view>
				<view class="mykpi-table-row">
					<view>2020年02月</view>
					<view>500分</view>
					<view>B</view>
				</view>
				<view class="mykpi-table-row">
					<view>2020年03月</view>
					<view>500分</view>
					<view>B</view>
				</view>
				<view class="mykpi-table-row">
					<view>2020年04月</view>
					<view>500分</view>
					<view>B</view>
				</view>
				<view class="mykpi-table-row">
					<view>2020年05月</view>
					<view>500分</view>
					<view>B</view>
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
