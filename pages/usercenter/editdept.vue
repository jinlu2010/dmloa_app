<template>
	<view class="newtask">
		<form>
			<view class="form">
				<view class="form-item">
					<view class="title">部门名称</view>
					<input placeholder="请输入部门名称" class="input" v-model="name" />
				</view>
				<view class="form-item">
					<view class="title">部门意义</view>
					<view class="textarea">
						<textarea @blur="significanceBlur" auto-height placeholder="请输入部门意义" v-model="significance" />
					</view>
				</view>
				<view class="form-item">
					<view class="title">部门目标</view>
					<view class="textarea">
						<textarea @blur="goalBlur" auto-height placeholder="请输入部门目标" v-model="goal" />
					</view>
				</view>

				<view class="form-item">
					<view class="title">部门职能</view>
					<view class="textarea">
						<textarea @blur="dutyBlur" auto-height placeholder="请输入部门职能" v-model="duty" />
					</view>
				</view>
			</view>
			<button class="btngreen btnform" @click="editDept()">保存</button>
			<!-- <button class="btnblue border100 mr60" @click="delDept()">删除</button> -->
		</form>
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
				name:'',
				significance:'',
				goal:'',
				duty:'',
				department_id:''
			}
		},
		onLoad(option) {
			this.department_id = option.id
			this.axios.get('department/get', {
				params: {
					'id': this.department_id
				}
			}).then(res => {
				console.log(res.data.data)
				this.name = res.data.data.name,
				this.significance = res.data.data.significance,
				this.goal=res.data.data.goal,
				this.duty = res.data.data.duty
			})
		},
		methods: {
			editDept: function(){
				let data = {
					id: this.department_id,
					name: this.name,
					duty: this.duty,
					goal: this.goal,
					significance: this.significance
				}
				let dept = JSON.stringify(data);
				console.log(dept);
				let that = this
				this.axios.post('department/save', dept)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，修改部门成功！',
								confirmText: '返回列表',//这块是确定按钮的文字
								showCancel:false,
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack({
											delta: 1,
										});
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							})
						} else {
							uni.showModal({
								content: res.data.message,
								confirmText: "知道了",
								showCancel: false
							})
						}
					})
			},
			delDept:function(){
				
			}
		}
	}
</script>

<style>

</style>
