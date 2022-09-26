<template>
	<view class="detail">
		<view class="form">
			<view class="form-item">
				<view class="title">软件反馈</view>
				<view class="textarea">
					<textarea @blur="bindTextAreaBlur" auto-height placeholder="给开发者对软件Bug或者需要改进的地方，希望大家都提出来。感谢您的宝贵意见。" />
				</view>
			</view>
		</view>
		<button class="btngreen btnform">立即提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
