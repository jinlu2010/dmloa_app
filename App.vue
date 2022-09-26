<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let token = uni.getStorageSync('token')
			if(!token){
				uni.reLaunch({
					url: 'pages/login/login',
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*@import './common/uni.css';*/
	@import './common/top.css';
	@import './common/style.css';
</style>
