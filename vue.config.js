module.exports = {
    devServer: {
        proxy: {
            '/api': {
				target: 'https://www.thebyte.com.cn/oa/',
				// target: 'http://127.0.0.1:8000/', // 源地址
                changeOrigin: true, // 改变源
                pathRewrite: {
                    '^/api': '' // 路径重写
                }
            }
        }
    },
	transpileDependencies:['uni-simple-router']
}