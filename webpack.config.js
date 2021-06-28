const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bulit.js',
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
                    limit: 5 * 1024
                }
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/Security.html'
        })
    ],
    mode: 'development',
}