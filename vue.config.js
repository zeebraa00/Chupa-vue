module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
		proxy: {
			'/rest': {
				target: 'http://localhost:3000/rest',
				changeOrigin: true,
				pathRewrite: {
				  '^/rest': ''
				}
			}
		}
	}
}