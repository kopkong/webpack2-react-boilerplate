const path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HTMLPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';

let plugins = [
    new ExtractTextPlugin('styles-[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    new webpack.DefinePlugin({
        // 定义全局变量
        'process.env': {
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    }),
    new HTMLPlugin({
        template: path.resolve(__dirname, 'src/index.html.tpl'),
        filename: 'index.html'
    }),
];

let entry = [path.resolve(__dirname,'src/app.js')],
    publicPath = 'build';

if (nodeEnv === 'production') {
    plugins.push(
        new CleanPlugin(path.resolve(process.cwd(), 'build')),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: false,
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    )
} else {
    entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&reload=true');

    publicPath = '/';

    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = {
    // context: __dirname,
    devtool: 'source-map',
    entry: entry,
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'build'),
        publicPath: publicPath ,
        chunkFilename: '[name]-[hash].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src')
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true'
                }
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "less-loader", "postcss-loader"]
                })
            },
            {
                test: /\.scss$/,
                use : ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader", "postcss-loader"]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['url-loader?limit=10000&name=files/[md5:hash:base64:10].[ext]']
            }]
    },

    plugins: plugins
};