const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    entry: path.join(process.cwd(), './src/a.module.ts'),
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'a.module.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.js', '.html', '.css'],
        modules: ['./node_modules', root('src')]
    },
    module: {

        rules: [
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
    externals: [
        function (context, request, callback) {
            if (/^@angular/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ],
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            root('./src'), // location of your src
            {} // a map of your routes
        ),
        new ExtractTextPlugin("styles.css"),
    ]
};