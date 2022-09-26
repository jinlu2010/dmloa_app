<template>
	<view>
		<view class="status-contents">
		 	<view class="status top-view">
		 		<view class="titles">
		 			<view class="UserFace">
						<image :src="imgUrl"></image>
					</view>
		 			<view class="titleText">{{titleText}}</view> 
		 			<view class="RightButton">
		 				<uni-icons type="contact" size="32" color="white" @tap="UserCenter"></uni-icons>
		 			</view>			
		 		</view>
		 	</view>
		</view>
		<view class="place"></view>
		<view class="tabbar">
			<view class="bgtab"></view>
			<view class="tab-title">
				<view @tap="change(0)" :class="{active:btncontent == 0}">团队绩效</view>
				<view @tap="change(1)" :class="{active:btncontent == 1}">我的绩效</view>
			</view>
		</view>
		
		<view class="tab-content" :class="{tab:btncontent == 0}">
			<view class="choicetime">
				<button class="calendar-button" type="button" @tap="open">{{info.date}}<uni-icons type="arrowdown" size="12" color="#004343" class="pl20"></uni-icons></button>
				<uni-calendar ref="calendar" :selected="info.selected" :showMonth="false" :date="info.date" :insert="false" :lunar="false" :range="false" @confirm="confirm" />
			</view>
			
			<view class="team-layout">
				<view class="team">
					<view class="team-title">01 金鹭 运营部-平面设计师</view>
					<view class="team-item-container" @tap="Detail">
						<view class="team-item-content">
							<view class="list-content-left">
								<text class="title">入职培训</text>
								<text class="note">From 徐会香</text>
							</view>
							<view class="list-content-middle">
								<text class="note">已完成</text>
							</view>
							<view class="list-content-right">
								<image src="../../../static/image/icon08.png" class="image"></image>
							</view>
						</view>
					</view>
					<view class="team-item-container" @tap="Detail">
						<view class="team-item-content">
							<view class="list-content-left">
								<text class="title">设计劳动节海报</text>
								<text class="note">From 张小小</text>
							</view>
							<view class="list-content-middle">
								<text class="note">已完成</text>
								<text class="number blue">+1</text>
							</view>
							<view class="list-content-right">
								<button class="btngreen mr10" @tap.stop="tapshow">评分</button>
							</view>
						</view>
					</view>
					<view class="team-item-container" @tap="Detail">
						<view class="team-item-content">
							<view class="list-content-left">
								<text class="title">花开声音LOGO设计</text>
								<text class="note">From NO.20200215CWH</text>
							</view>
							<view class="list-content-middle">
								<text class="note blue">已延期</text>
								<text class="date blue">2020.6.30</text>
							</view>
							<view class="list-content-right">
								<image src="../../../static/image/icon07.png" class="image"></image>
							</view>
						</view>
					</view>
				</view>

				<view class="team">
					<view class="team-title">02 雪梨 运营部-客服经理</view>
					<view class="team-item-container" @tap="Detail">
						<view class="team-item-content">
							<view class="list-content-left">
								<text class="title">入职培训</text>
								<text class="note">From 徐会香</text>
							</view>
							<view class="list-content-middle">
								<text class="note">已完成</text>
								<text class="number blue">+1</text>
							</view>
							<view class="list-content-right">
								<image src="../../../static/image/icon05.png" class="image"></image>
							</view>
						</view>
					</view>
					<view class="team-item-container" @tap="Detail">
						<view class="team-item-content">
							<view class="list-content-left">
								<text class="title">协助徐汇香等搬仓库</text>
								<text class="note">From 张小小</text>
							</view>
							<view class="list-content-middle">
								<text class="note">已完成</text>
								<text class="number blue">+1</text>
							</view>
							<view class="list-content-right">
								<button class="btnedit mr10" @tap.stop="tapshow">修改</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="mask" v-show="show"></view>
			<view class="popup" v-show="show">
				<view class="popup-content">
					<form @submit="formSubmit" @reset="formReset">
						<view class="form pl40">
							<view class="form-item">
								<view class="title">任务评分</view>
								<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
									<view class="input">{{array[index].name}}<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
									</view>
								</picker>
							</view>
							<view class="form-item">
								<view class="title">指导意见</view>
								<view class="textarea popuptextarea">
									<textarea @blur="bindTextAreaBlur" auto-height placeholder="请输入内容" />
								</view>
							</view>
							
							<button class="btngreen btnsubmit">提交</button>
							<view class="cancle">
								<uni-icons type="closeempty" size="24" color="#999999" class="pl20"  @tap="taphide"></uni-icons>
							</view>
						</view>
					</form>
				</view>
			</view>
		</view>
		<view class="tab-content" :class="{tab:btncontent == 1}">
			<text class="mycheck-date">2020年03月</text>
			<view class="list">
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
			</view>
			
			<text class="mycheck-date">2020年02月</text>
			<view class="list">
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
				<view class="list-item-container" @tap="Detail">
					<view class="list-item-content">
						<view class="list-content-left">
							<text class="title">办理入职培训</text>
							<text class="note">03-24 From 徐会香</text>
						</view>
						<view class="list-content-right">
							<text class="h1">+1</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	
	export default {
		components: {
			uniIcons,
			uniCalendar,
			uniList,
		},
		data() {
			return {
				titleText:"绩效考核",
				imgUrl:"../../../static/image/userface.png",
				showCalendar: true,
				info: {
					date: new Date().toISOString().slice(0, 10),
					selected: []
				},
				windowWith:0,
				windowHeight:0,
				dateWidth:'',
				btncontent: 0,
				show : false,
				array: [{name:'未执行0分'},{name: '不满意3分'}, {name:'基本满意8分'}, {name:'非常满意10分'}],
				index: 2,
			}
		},
		methods: {
			UserCenter: function() {
				uni.navigateTo({
					url: '../../usercenter/usercenter',
				})
			},
			Detail: function() {
				uni.navigateTo({
					url: '../../detail/detail01',
				})
			},
			open() {
				this.$refs.calendar.open()
			},
			confirm(e) {
				var choosetime=e.fulldate;
				this.info.date=choosetime;
			},
			change(e) {
			     this.btncontent = e;
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
			},
			tapshow:function(){
				this.show = true
			},
			taphide:function(){
				this.show = false
			}
		}
	}
</script>

<style>
	
</style>
