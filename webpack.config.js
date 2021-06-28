const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry: {
        Security: './src/js/Security.js',
        Home: './src/js/Home.js'
    },
    // 出口
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            },
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            // 图片打包
            {
                test: /\.(jpg|gif|png)/,
                loader: 'url-loader',
                options: {
                    enModule: true,
                    publicPath: './src/img',
                    limit: 5 * 1024
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'Security.html', // 生成的html文件名
            template: './src/Security.html', // 模板html
            chunks: ['Security'], // 指定生成的html文件引入的是哪些js文件
            minify: false, // 是否压缩，生产环境默认就是压缩的
        }),
        new HtmlWebpackPlugin({
            filename: 'Home.html', // 生成的html文件名
            template: './src/Home.html', // 模板html
            chunks: ['Home'], // 指定生成的html文件引入的是哪些js文件
            minify: false, // 是否压缩，生产环境默认就是压缩的
        }),
    ],
    mode: 'development',
}