<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="dept">
						<view class="depttitle">部门岗位列表</view>
						<button class="btngreen btndept" @click="AddDept()">添加部门</button>
						<button class="btngreen btndept" @click="AddPost()">添加岗位</button>
					</view>
					
					<view class="form-list mt30">
						<view class="form-list-item" v-for="item in deptlist" :key="item.id">
							<view class="deptname">
								{{item.name}}
								<uni-icons type="trash" size="20" color="#999" class="pl40 right" @click="DelDept(item)"></uni-icons>
								<uni-icons type="compose" size="20" color="#999" class="pl40 right" @click="EditDept(item)"></uni-icons>
								
								<view class="deptname" v-for="post in item.post" :key="post.id">
									<text class="pl60">{{post.name}}</text>
									<uni-icons type="trash" size="20" color="#999" class="pl40 right" @click="DelPost(post)"></uni-icons>
									<uni-icons type="compose" size="20" color="#999" class="pl40 right" @click="EditPost(post)"></uni-icons>
								</view>
							</view>
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
				deptlist:[{
					id:'',
					name:'',
					post:[]
				}],
				deptArr:[],
				postArr:[],
				postlist:[]
			}
		},
		onShow(){
			this.DeptList();
		},
		onLoad(option){
			//this.DeptList();
		},
		methods: {
			reload() {
				const pages = getCurrentPages()
				const curPage = pages[pages.length - 1]
				curPage.onLoad(curPage.options) // 传入参数
				curPage.onShow()
				curPage.onReady()
			},
			DeptList:function(){
				this.axios.get('department/get_all')
				.then(res => {
					this.deptArr = res.data.data
					console.log('deptArr:',this.deptArr)
					this.deptlist=[]
					//this.postArr = []
					for(let i=0; i<this.deptArr.length; i++){//取id值
						console.log('deptArrId:',this.deptArr[i].id)
						this.axios.get('job/get_all',{
							params: {
								'department_id': this.deptArr[i].id
							}
						}).then(resp => {
							this.postArr = resp.data.data
							this.postlist = []
							console.log('postArr:',resp.data.data)	
							for(let j=0; j<this.postArr.length; j++){
								this.postlist.push({
									id:this.postArr[j].id,
									name:this.postArr[j].name
								})
							}
							console.log('postlist',this.postlist)
							this.deptlist.push({
								id:this.deptArr[i].id,
								name:this.deptArr[i].name,
								post:this.postlist
							})
							console.log('deptlist:',this.deptlist)
						})
					}
				})
				
			},
			EditDept:function(item){
				console.log(item.id)
				uni.navigateTo({
					url: 'editdept?id=' + item.id,
				})
			},
			EditPost:function(post){
				console.log(post.id)
				uni.navigateTo({
					url: 'editpost?id=' + post.id,
				})
			},
			AddDept:function(){
				uni.navigateTo({
					url: 'adddept',
				})
			},
			AddPost:function(){
				uni.navigateTo({
					url: 'addpost',
				})
			},
			DelDept:function(item){
				let data ={
					id: item.id,
				}
				let remove_id = JSON.stringify(data);
				let that = this
				uni.showModal({
					title: "提示",
					content: '确定删除此部门吗？',
					success: function(res) {
						if (res.confirm) {
							that.axios.post('department/remove', remove_id)
								.then(res => {
									console.log(res)
									if (res.data.code == 200) {
										uni.showToast({
											title: '删除成功',
											icon: 'success',
										})
										setTimeout(function() {
											that.reload()
										}, 1000)
									} else {
										uni.showModal({
											content: res.data.message,
											confirmText: "知道了",
											showCancel: false
										})
									}
								})
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			DelPost:function(post){
				let data ={
					id: post.id,
				}
				let remove_id = JSON.stringify(data);
				let that = this
				uni.showModal({
					title: "提示",
					content: '确定删除此岗位吗？',
					success: function(res) {
						if (res.confirm) {
							that.axios.post('job/remove', remove_id)
								.then(res => {
									console.log(res)
									if (res.data.code == 200) {
										uni.showToast({
											title: '删除成功',
											icon: 'success',
										})
										setTimeout(function() {
											that.reload()
										}, 1000)
									} else {
										uni.showModal({
											content: res.data.message,
											confirmText: "知道了",
											showCancel: false
										})
									}
								})
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
		}
	}
</script>

<style>
	.dept{
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height:90rpx;
		margin-top: 20rpx;
	}
	.depttitle{
		font-size:32rpx;
		width: 50%;
	}
	
	.deptname{
		width: 100%;
		display: block;
		font-size:32rpx;
		line-height:90rpx;
		float: left;
	}
	.deptname text{
		font-size: 32rpx;
	}

	.btndept{
		border-radius: 50rpx;
		font-size: 28rpx;
		width:200rpx;
		margin-left: 20rpx;
	}
	.pl40{
		padding: 0 0 0 40rpx;
	}
</style>
