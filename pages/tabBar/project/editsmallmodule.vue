<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="moduletitle">
						项目模块
						<!-- <uni-icons type="plus" size="24" color="#999" class="right pt4" @tap="NewSmallModule"></uni-icons> -->
					</view>
					<view class="form-list" v-for="item in smallmodulelist" :key="item.id">
						<view class="form-list-item" @tap="EditSmallModuleDetail(item)">
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
				smallmodulelist:[],
				module_id:'',
				module_name:'',
				project_id:'',
				project_name:''
			}
		},
		onShow() {
			this.SmallModuleList();
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			//this.module_id = item.id
			this.project_name = item.name
			this.project_id = item.id
		},
		methods: {
			SmallModuleList:function(){
				this.axios.get('module/get_all', {
					params: {
						'project_id':this.project_id
						// 'level_id': 1,
						// 'father_id':this.module_id
					}
				}).then(res => {
					this.smallmodulelist=res.data.data
					console.log('smallmodulelist:',this.smallmodulelist)
				})
			},
			EditSmallModuleDetail:function(item){
				var data ={
					//'mid':this.module_id,
					'id':item.id,
				}
				uni.navigateTo({
					url: 'editsmallmoduledetail?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			NewSmallModule:function(){
				var data ={
					//'mid':this.module_id,
					'name':this.project_name,
					'id':this.project_id
				}
				uni.navigateTo({
					url: 'newsmallmodule?item='+ encodeURIComponent(JSON.stringify(data))
				})
			}
		}
	}
</script>

<style>

</style>
