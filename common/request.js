// request.js
// 通常可以吧 baseUrl 单独放在一个 js 文件了
const baseUrl = 'http://47.100.125.167:8082/'

const request = (config = {}) => {
	// 在这里可以对请求头进行一些设置
	// 例如：
	let token = uni.getStorageSync('token')
	config.header = {
		'content-type': 'application/json',
		'token':token
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + config.url || '',
			method: config.type || 'GET',
			data: config.data || {},
			header: config.header || {}
		}).then(data => {
			let [err, res] = data;
			resolve(res);
		}).catch(error => {
			reject(error)
		})
	});
}

const get = (url, data, config = {}) => {

	config.type = 'GET';
	config.data = data;
	config.url = url;
	return request(config)
}

const post = (url, data, config = {}) => {
	config.type = 'POST';
	config.data = data;
	config.url = url;
	return request(config)
}


export default {
	request,
	get,
	post
}
