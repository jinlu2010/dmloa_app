module.exports = {
    devServer: {
        proxy: {
            '/api': {// 使用"/api"来代替"http://f.apiplus.c"
				target: 'http://47.100.125.167:8082/',
				//target: 'http://www.iyoudian.cn:7070/',
                changeOrigin: true, // 改变源
                pathRewrite: {
                    '^/api': '' // 路径重写
                }
            }
        }
    },
	transpileDependencies:['uni-simple-router']
}