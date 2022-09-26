<template>
	<view class="newtask">
		<form @submit="formSubmit" @reset="formReset">
			<view class="form">
				<view class="form-item">
					<view class="moduletitle">
						任务工单
						<uni-icons type="plus" size="24" color="#999" class="right pt4" @tap="NewWorkSheet"></uni-icons>
					</view>
					<view class="form-list" v-for="item in taskdetail" :key="item.id">
						<view class="form-list-item" @tap="EditWorkSheetDetail(item)" >
							<view class="title">{{item.name}}</view>
							<view class="user">{{item.operator}}</view>
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
				tasklist:[],
				taskdetail:[],
				module_id:'',
				project_id:''
			}
		},
		onShow() {
			this.TaskList();
		},
		onLoad(option){
			const item = JSON.parse(decodeURIComponent(option.item))
			this.module_id=item.id
			this.project_id = item.pid
		},
		methods: {
			TaskList:function(){
				this.axios.get('task/get_all', {
					params: {
						'is_assigned': true,
						'module_id':this.module_id
					}
				}).then(res => {
					this.taskdetail=[] //让列表为空，否则列表会无限增加
					for(let i =0; i< res.data.data.length; i++){//取id值
						for(let j=0; j<res.data.data[i].task_items.length;j++){
							if(res.data.data[i].task_items[j].is_finished==true){
								this.finished='已完成'
							}else{
								this.finished='进行中'
							}
							this.taskdetail.push({
								id:res.data.data[i].id,
								name:res.data.data[i].name,
								end_at:res.data.data[i].end_at,
								start_at:res.data.data[i].start_at,
								finished:res.data.data[i].is_finished,
								operator:res.data.data[i].task_items[j].operator.name,
								operator_finished:this.finished
							})
						}
					}
				})
			},
			EditWorkSheetDetail:function(item){
				var data ={
					'id':item.id,
					'mid':this.module_id,
				}
				uni.navigateTo({
					url: 'editworksheetdetail?item='+ encodeURIComponent(JSON.stringify(data))
				})
			},
			NewWorkSheet:function(){
				var data ={
					'pid':this.project_id,
					'mid':this.module_id,
				}
				uni.navigateTo({
					url: 'newworksheet?item='+ encodeURIComponent(JSON.stringify(data))
				})
			}
		}
	}
</script>

<style>

</style>
