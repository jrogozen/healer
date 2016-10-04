var path = require('path')
var webpack = require('webpack')

module.exports = {
    name: 'client side rendering',
    context: path.resolve(__dirname),
    target: 'web',
    devtool: 'cheap-eval-source-map',
    alias: {
        config: 'config',
        app: 'app',
        server: 'server'
    },
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './app/index.js' // Your appʼs entry point
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV === 'development'
        })
    ],
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
}
