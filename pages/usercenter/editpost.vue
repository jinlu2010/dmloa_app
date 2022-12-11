<template>
	<view class="newtask">
		<view class="form">
			<view class="form-item">
				<view class="title">岗位名称</view>
				<input placeholder="请输入岗位名称" class="input" v-model="name" />
			</view>
			<view class="form-item">
				<view class="title">所属部门</view>
				<picker @change="deptChange" :value="dept_id" :range="deptArr" range-key="name">
					<view class="input">{{deptArr[dept_id].name}}
						<uni-icons type="arrowdown" size="12" color="#999" class="pl20"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="form-item">
				<view class="title">岗位意义</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入岗位意义" v-model="significance" />
				</view>
			</view>
		
			<view class="form-item">
				<view class="title">工作概要</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入工作概要" v-model="outline" />
				</view>
			</view>
			
			<view class="form-item">
				<view class="title">运营工作</view>
				<view class="textarea height">
					<view class="textarea-item">
						<view class="textarea-content" v-for="(item,index) in operateArr" :key="index">
							<input placeholder="请输入工作内容" class="input wd100" v-model="item.content" />
							<input placeholder="评分标准" class="input wd25" v-model="item.score" />
							<uni-icons type="minus" size="20" color="#ccc" class="lh90" @click="removeOperate(index)"></uni-icons>
						</view>
						<uni-icons type="plus" size="24" color="#ccc" class="addcontent" @click="addOperate"></uni-icons>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="title">管理工作</view>
				<view class="textarea height">
					<view class="textarea-content" v-for="(item,index) in manageArr" :key="index">
						<input placeholder="请输入工作内容" class="input wd100" v-model="item.content" />
						<input placeholder="评分标准" class="input wd25" v-model="item.score" />
						<uni-icons type="minus" size="20" color="#ccc" class="lh90" @click="removeManage(index)"></uni-icons>
					</view>
					<uni-icons type="plus" size="24" color="#ccc" class="addcontent" @click="addManage"></uni-icons>
				</view>
			</view>
			<view class="form-item">
				<view class="title">技能工作</view>
				<view class="textarea height">
					<view class="textarea-content" v-for="(item,index) in skillArr" :key="index">
						<input placeholder="请输入工作内容" class="input wd100" v-model="item.content" />
						<input placeholder="评分标准" class="input wd25" v-model="item.score" />
						<uni-icons type="minus" size="20" color="#ccc" class="lh90" @click="removeSkill(index)"></uni-icons>
					</view>
					<uni-icons type="plus" size="24" color="#ccc" class="addcontent" @click="addSkill"></uni-icons>
				</view>
			</view>
			
			<view class="form-item">
				<view class="title">岗位权力</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入岗位权力" v-model="power" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">技能要求</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入技能要求" v-model="skill" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">资产配置</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入资产配置" v-model="capital" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">招聘要求</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入招聘要求" v-model="recruit" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">工作环境</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入工作环境" v-model="environment" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">发展方向</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入发展方向" v-model="direction" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">福利标准</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入福利标准" v-model="welfare" />
				</view>
			</view>
			<view class="form-item">
				<view class="title">淘汰标准</view>
				<view class="textarea">
					<textarea auto-height placeholder="请输入淘汰标准" v-model="eliminate" />
				</view>
			</view>
		</view>
		<view class="btn">
			<button class="btngreen btnform" @click="editPost()">保存</button>
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
				name:'',
				dept_id:0,
				deptArr: [],
				operate_id:0,
				operateArr:[{
					//id:0,
					content:'',
					score:''
				}],
				manage_id:0,
				manageArr:[{
					//id:0,
					content:'',
					score:''
				}],
				skill_id:0,
				skillArr:[{
					//id:0,
					content:'',
					score:''
				}],
				significance:'',
				outline:'',
				power:'',
				skill:'',
				capital:'',
				recruit:'',
				environment:'',
				direction:'',
				welfare:'',
				eliminate:'',
				post_id:'',
				index:0
			}
		},
		onLoad(option) {
			this.post_id = option.id
			console.log('postId:',this.post_id)
			this.axios.get('job/get', {
				params: {
					'id': this.post_id
				}
			}).then(res => {
				console.log(res.data.data)
				this.name = res.data.data.name,
				this.department_id = res.data.data.department.id,
				this.capital = res.data.data.capital,
				this.direction = res.data.data.direction,
				this.eliminate = res.data.data.eliminate,
				this.environment = res.data.data.environment,
				this.manageArr = res.data.data.manageArr,
				this.operateArr = res.data.data.operateArr,
				this.outline = res.data.data.outline,
				this.power = res.data.data.power,
				this.recruit = res.data.data.recruit,
				this.significance = res.data.data.significance,
				this.skill = res.data.data.skill,
				this.skillArr = res.data.data.skillArr,
				this.welfare = res.data.data.welfare
			})
			this.axios.get('department/get_all').then(res => {
				this.deptArr = res.data.data
				let deptlist = this.deptArr
				this.dept_id = (deptlist).findIndex ((deptlist) => deptlist.id  ==  this.department_id );
				console.log(this.dept_id)
			})
		},
		methods: {
			editPost: function(){
				let data = {
					id: this.post_id,
					name: this.name,
					department_id: this.deptArr[this.dept_id].id,
					capital: this.capital,
					direction: this.direction,
					eliminate: this.eliminate,
					environment: this.environment,
					manageArr: this.manageArr,
					operateArr: this.operateArr,
					outline: this.outline,
					power: this.power,
					recruit: this.recruit,
					significance: this.significance,
					skill: this.skill,
					skillArr: this.skillArr,
					welfare: this.welfare
				}
				let post = JSON.stringify(data);
				console.log(post);
				let that = this
				this.axios.post('job/save', post)
					.then(res => {
						console.log(res)
						if (res.data.code == 200) {
							uni.showModal({
								title: "提示",
								content: '恭喜您，修改岗位成功！',
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
			deptChange: function(e) {
				this.dept_id = e.detail.value
			},
			addOperate(){
				//this.operate_id += 1
				this.operateArr.push({
					//id: this.operate_id,
					content: '',
					score:''
				});
				console.log(this.operateArr);
			},
			addManage(){
				//this.manage_id += 1
				this.manageArr.push({
					//id: this.manage_id,
					content: '',
					score:''
				});
				console.log(this.manageArr);
			},
			addSkill(){
				//this.skill_id += 1
				this.skillArr.push({
					//id: this.skill_id,
					content: '',
					score:''
				});
				console.log(this.skillArr);
			},
			removeOperate(index){
				this.operateArr.splice(index,1);
			},
			removeManage(index){
				this.manageArr.splice(index,1);
			},
			removeSkill(index){
				this.skillArr.splice(index,1);
			},
		}
	}
</script>

<style>
	.textarea-content{
		display: flex;
		justify-content: space-between
	}
	.left2{
		float: left;
		width: 75%;
		text-align: left;
	}
	.lh90{
		line-height: 90rpx;
	}
	.addcontent{
		display: block;
		margin: 0 auto;
		text-align: center;
	}
	.wd100{
		width: 100%;
	}
	.wd25{
		width: 25%;
	}
	.btn{
		padding-bottom: 40rpx;
	}
</style>
