<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="moduletitle">
						项目大模块
						<uni-icons type="plus" size="24" color="#999" class="right pt4" @tap="NewBigModule"></uni-icons>
					</view>
					<view class="form-list" v-for="item in bigmodulelist" :key="item.id">
						<view class="form-list-item" @tap="EditBigModuleDetail(item)">
							<view class="title">{{item.name}}</view>
							<view class="user">{{item.director.name}}</view>
							<view class="endat">{{item.end_at}}</view>
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
				bigmodulelist:[],
				reFresh: '',
				project_name:'',
				project_id:''
			}
		},
		onShow(){
			this.BigModuleList();
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.project_name=item.name
			this.project_id=item.id
		},
		methods: {
			BigModuleList:function(){
				this.axios.get('module/get_all', {
						params: {
							'leve_id': 0,
							'project_id':this.project_id
						}
					})
					.then(res => {
						this.bigmodulelist=res.data.data
						console.log('bigmodulelist:',this.bigmodulelist)
					})
			},
			EditBigModuleDetail:function(item){
				uni.navigateTo({
					url: 'editbigmoduledetail?id=' + item.id,
				})
			},
			NewBigModule:function(){
				var data ={
					'name':this.project_name,
					'id':this.project_id
				}
				uni.navigateTo({
					url: 'newbigmodule?item='+ encodeURIComponent(JSON.stringify(data))
				})
			}
		}
	}
</script>

<style>

</style>
