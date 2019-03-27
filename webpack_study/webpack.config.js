const webpack = require('webpack'); //导入webpack 包
const path = require('path'); //导入path
const htmlWebpackPlugin=require('html-webpack-plugin') //导入html-webpack-plugin 

const appDir = path.join(__dirname, './src'); 
const distDir = path.join(__dirname, './dist');


module.exports = {
    //webpack输入路径
    entry: path.join(__dirname, './src/main.js'),
    // //输出路径
    // output: {
    //     path: distDir,
    //     //webpack 输出文件的名字  这个文件webpack 用命令webpack 编译完成后生成在内存中，看不到但是能饮用到
    //     filename: 'bundle.js'
    //   },
      //开发模式
    mode: 'development',
      //热部署插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
          //指定输入到内存中的模版文件，会根据指定的页面路径去生成内存中的文件 
          template:path.join(__dirname,'./src/index.html'),
          //指定输出的文件
          filename:'index.html'
        }),
      ],
      //测试服务器 配置
      devServer: {
        // contentBase: appDir,  //默认localhost:8080 显示的内容 
        hot: true, //开启热部署
        port :3000,//服务器启动的端口

        // inline: true
      },

      //webpack 支持css
      module:{
        rules: [
            {
                //处理css
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            // 这里的loder的顺序要注意 先处理的要写在最后  less-loader 处理完 css-loader 处理 ，最后style-loader处理
            {
                //处理less
              test: /\.less$/,
              use: [ 'style-loader', 'css-loader' ,'less-loader']
            },
            {
                //处理css中的url
                test: /\.(jpg|jpeg|png|gif)$/, 
                //name=[hash:8]-[name].[ext] 
                //limit 的意思是如果图片的大小小于给定的值 图片就base64 显示.如果等于就直接显示原来的名字
                //表示图片的名字是8为hash的值-图片原来的名字.图片原来的后缀 例如 a07cecce-2.jpg 
                use: [ 'url-loader?limit=4952&name=[hash:8]-[name].[ext]']
              },
              {
                //处理字体
                test: /\.(tff|eot|svg|woff|woff2)$/, 
                //name=[hash:8]-[name].[ext] 
                //limit 的意思是如果图片的大小小于给定的值 图片就base64 显示.如果等于就直接显示原来的名字
                //表示图片的名字是8为hash的值-图片原来的名字.图片原来的后缀 例如 a07cecce-2.jpg 
                use: [ 'url-loader']
              },
          ]
      },

}