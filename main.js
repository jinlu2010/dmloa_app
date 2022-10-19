import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import request from 'common/request.js'

Vue.prototype.$request = request
/* import router from './router'
import {
	RouterMount
} from 'uni-simple-router'
 */

Vue.use(VueAxios, axios)

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif



/* const instance = axios.create({
	baseURL: 'http://47.100.125.167:8082/',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	}
}); */


let baseURL = 'http://110.40.229.45:8082/'
axios.defaults.adapter = function(config) {
	let token = uni.getStorageSync("token")
	config.headers = {
		'content-type': 'application/json',
		'token':token
	}
	return new Promise((resolve, reject) => {
		console.log(config)
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};
				settle(resolve, reject, response);
			}
		})
	})
}


/* axios.interceptors.request.use(config => {
	let token = uni.getStorageSync("token")
	if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
		config.headers["token"] = token;
		config.headers["Content-Type"] = "application/json";
		console.log('interceptors config=', config)
	}
	return config
}, error => {
	return Promise.reject(error)
})
 */

