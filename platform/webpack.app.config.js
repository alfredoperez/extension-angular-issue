const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
    entry: {
        'app': path.join(process.cwd(), './src/main.ts'),
        'vendors': path.join(process.cwd(), './src/vendors.ts')
    },

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            /* Embed and load html */
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            /* Embed css */
            {
                test: /\.css$/,
                loader: 'raw-loader',
                exclude: /\.async\.css$/
            },
            /* Async load css */
            {
                test: /\.async\.css$/,
                loaders: ['file?name=[name].[hash].[ext]', 'extract']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunksSortMode: 'manual',
            chunks: []
        }),
        new ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/),
    ],

};