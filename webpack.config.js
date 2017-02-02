var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		index:__dirname + "/src/index.js",
		vendor:["react","react-dom"]
	},
	output: {
		path: path.resolve(__dirname + "/build"),
		filename: "[name].js",
        publicPath: '/build',
        chunkFilename: "[name].js",
	},
	module: {
		loaders: [ 
		//ES6-babel->ES5
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['react-hot','babel'],
		},
		//(s)css->css modules
		{
			test: /\.css$/,
			loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]!postcss'
		},
		{
			test: /\.scss$/,
			loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]-[hash:base64:5]!sass?outputStyle=expanded&sourceMap!postcss'
		}]
	},
	postcss: [
		require('autoprefixer')
	],
	//插件
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }),
		new webpack.BannerPlugin('This file is created by Psc'),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})
	],
	/*devServer: {
	    contentBase: "./",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    //historyApiFallback: true,//不跳转
	    inline: true,
	    hot:true
	}*/
}