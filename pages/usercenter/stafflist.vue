<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="moduletitle">
						员工列表
						<uni-icons type="plus" size="24" color="#999" class="right pt4" @tap="AddStaff"></uni-icons>
					</view>
					<view class="form-list">
						<view class="form-list-item" @tap="EditStaff(item)" v-for="item in stafflist" :key="item.id">
							<view class="staffname">{{item.name}}</view>
							<view class="staffpost">{{item.job.name}}</view>
							<view class="staffcontact">{{item.account}}</view>
							<uni-icons type="arrowright" size="18" color="#CCC" class="right pt10"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	
	export default {
		components: {
			uniIcons,
		},
		data() {
			return {
				stafflist:[],
				reFresh: '',
				project_name:'',
				project_id:''
			}
		},
		onShow(){
			this.StaffList();
		},
		onLoad(option){
			/* const item = JSON.parse(decodeURIComponent(option.item))
			this.project_name=item.name
			this.project_id=item.id */
		},
		methods: {
			StaffList:function(){
				this.axios.get('employee/get_all')
					.then(res => {
						this.stafflist = res.data.data
						console.log(this.stafflist)
					})
			},
			EditStaff:function(item){
				uni.navigateTo({
					url: 'editstaff?id=' + item.id,
				})
			},
			AddStaff:function(){
				/* var data ={
					'name':this.project_name,
					'id':this.project_id
				}
				uni.navigateTo({
					url: 'newbigmodule?item='+ encodeURIComponent(JSON.stringify(data))
				}) */
				uni.navigateTo({
					url: 'addstaff',
				})
			}
		}
	}
</script>

<style>
	.staffname{
		width: 30%;
		display: block;
		font-size:28rpx;
		line-height:90rpx;
		float: left;
	}
	.staffpost{
		width: 30%;
		display: block;
		font-size:28rpx;
		line-height:90rpx;
		float: left;
	}
	.staffcontact{
		width: 30%;
		display: block;
		font-size:28rpx;
		line-height:96rpx;
		float: left;
	}
</style>
