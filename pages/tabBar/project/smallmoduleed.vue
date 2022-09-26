 <template>
	<view class="newtask">
		<view class="list">
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">LOGO设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">提前完成</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">VIS手册设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">延期完成</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">包装设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext red">逾期完成</text>
				</view>
			</view>
			<view class="list-item-container rightlist" @tap="WorkSheet">
				<view class="list-item-content">
					<text class="title teamkpi">品牌手册设计</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
					<text class="righttext">正常完成</text>
				</view>
			</view>
		</view>
		<view class="project-button">
			<button class="btngreen">编辑项目小模块</button>
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
			WorkSheet:function(){
				uni.navigateTo({
					url: 'worksheeted',
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
