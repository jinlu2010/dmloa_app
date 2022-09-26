<template>
	<view>
		<view class="tabbar">
			<view class="bgtab project-bgtab"></view>
			<view class="tab-title project-tab-title">
				<view>任务截止日期：2020-10-31</view>
			</view>
		</view>
		
		<view class="tab-content" style="display: block;">
			<view class="list project">
				<view class="list-item-container rightlist listheight">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title grey">发外包，收集30个作品</text>
							<text class="note">To 金鹭</text>
						</view>
						<view class="list-content-right project-content-right">
							<text class="title grey">已终止</text>
							<text class="date grey">至2020.5.30</text>
						</view>
					</view>
				</view>	
				<view class="list-item-container rightlist listheight">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">确定主色调</text>
							<text class="note">To 金鹭</text>
						</view>
						<view class="list-content-right project-content-right">
							<text class="title">已完成</text>
							<text class="date grey">至2020.5.30</text>
						</view>
					</view>
				</view>	
				<view class="list-item-container rightlist listheight">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">设计3个不同风格的logo</text>
							<text class="note">To 金鹭</text>
						</view>
						<view class="list-content-right project-content-right">
							<text class="title">已完成</text>
							<text class="date grey">至2020.5.30</text>
						</view>
					</view>
				</view>	
				<view class="list-item-container rightlist listheight">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">跟客户确认设计方案</text>
							<text class="note">To 印雪梅</text>
						</view>
						<view class="list-content-right project-content-right">
							<text class="title">已完成</text>
							<text class="date grey">至2020.5.30</text>
						</view>
					</view>
				</view>	
				<view class="list-item-container rightlist">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">跟客户签确认书</text>
							<text class="note">To 印雪梅</text>
						</view>
						<view class="list-content-right project-content-right">
							<text class="title">已完成</text>
							<text class="date grey">至2020.5.30</text>
						</view>
					</view>
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
			SmallModule:function(){
				uni.navigateTo({
					url: 'smallmoduleing',
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
