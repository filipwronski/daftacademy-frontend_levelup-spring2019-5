const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    mode:  process.env.NODE_ENV,
    entry: './src/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
}