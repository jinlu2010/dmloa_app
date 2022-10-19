 <template>
	<view>
		<view class="status-contents">
			<view class="status top-view">
				<view class="titles">
					<uni-icons type="arrowleft" size="24" color="white" @tap="goBack()" class="title-left"></uni-icons>
					<!-- <image src="../../static/image/icon17.png" class="title-right" @tap="Message"></image> -->
				</view>
			</view>
		</view>
		<view class="place"></view>
		<view class="usercenter">
			<view class="bgusercenter">
				<view class="avatar">
					<image :src="userface"></image>
				</view>
				<view class="name">
					<text class="h1">{{username}}</text>
					<text class="ml20 title">{{postname}}</text>
				</view>
				<view class="score">
					<view class="score-list">
						<text class="h1">10</text>
						<text class="title">今日得分</text>
					</view>
					<view class="score-list">
						<text class="h1">104</text>
						<text class="title">本月得分</text>
					</view>
					<view class="score-list">
						<text class="h1">B</text>
						<text class="title">上月评级</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="list usercenterlist">
			<view class="list-item-container usercenterlist-container">
				<view class="list-item-content" @tap="Company" v-show="admin">
					<image src="../../static/image/icon12.png"></image>
					<text class="title teamkpi">企业管理</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="Dept" v-show="admin">
					<image src="../../static/image/icon13.png"></image>
					<text class="title teamkpi">部门岗位管理</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="Staff" v-show="admin">
					<image src="../../static/image/icon13.png"></image>
					<text class="title teamkpi">员工管理</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="PersonalFlie">
					<image src="../../static/image/icon09.png"></image>
					<text class="title teamkpi">个人档案</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="PositionlFlie">
					<image src="../../static/image/icon10.png"></image>
					<text class="title teamkpi">岗位说明</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="Department">
					<image src="../../static/image/icon11.png"></image>
					<text class="title teamkpi">部门职能</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="MyKPI">
					<image src="../../static/image/icon12.png"></image>
					<text class="title teamkpi">我的绩效</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<view class="list-item-content" @tap="Team">
					<image src="../../static/image/icon13.png"></image>
					<text class="title teamkpi">团队绩效</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
				<!-- <view class="list-item-content" @tap="Feedback">
					<image src="../../static/image/icon12.png"></image>
					<text class="title teamkpi">软件反馈</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view> -->
				<view class="list-item-content" @tap="Logout">
					<image src="../../static/image/icon13.png"></image>
					<text class="title teamkpi">退出登录</text>
					<uni-icons type="arrowright" size="24" color="#CCC" class="right"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'

	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				userface: "../../static/image/myphoto.jpg",
				username:"",
				userid:"",
				dept_id:"",
				post_id:"",
				postname:'',
				admin:false,
				adminType:1,//0普通 1管理员
			}
		},
		onLoad(){
			this.axios.get('profile/get').then(res => {
				this.username = res.data.data.name;
				this.userid = res.data.data.id;
				this.post_id = res.data.data.job.id;
				this.dept_id = res.data.data.department.id;
				this.postname = res.data.data.job.name;
				this.adminType = res.data.data.adminType;
				if(this.adminType == 0){
					this.admin = false;
				}else{
					this.admin = true;
				}
			})
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			Company:function  () {
				uni.navigateTo({
					url: 'companyinfo',
				})
			},
			Dept:function  () {
				uni.navigateTo({
					url: 'deptlist',
				})
			},
			Staff:function  () {
				uni.navigateTo({
					url: 'stafflist',
				})
			},
			PersonalFlie:function(){
				uni.navigateTo({
					url: 'personalfile?id='+this.userid,
				})
			},
			PositionlFlie:function(){
				uni.navigateTo({
					url: 'positionfile?id='+this.post_id,
				})
			},
			Department:function(){
				uni.navigateTo({
					url: 'department?id='+this.dept_id,
				})
			},
			Feedback:function(){
				uni.navigateTo({
					url: 'feedback',
				})
			},
			Message:function(){
				uni.navigateTo({
					url: 'message',
				})
			},
			MyKPI:function(){
				uni.navigateTo({
					url: 'mykpi',
				})
			},
			Team:function(){
				uni.navigateTo({
					url: 'team',
				})
			},
			Logout:function(){
				uni.removeStorage({
					key:"token",
					success:function(res){
						uni.reLaunch({
							url: "../login/login"
						})
					}
				})
			}
		}
	}
</script>

<style>
	.uni-icons{
		line-height: 110rpx;
	}
</style>
