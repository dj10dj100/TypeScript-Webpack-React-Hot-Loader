var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        './src/index.tsx',
        'webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/only-dev-server'
    ],
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    output: {
        path: __dirname,
        publicPath: 'http://localhost:9090/',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map", // or "inline-source-map"
    devServer: {
        inline: true,
        port: 9090,
        hot: true
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            { 
                test: /\.tsx?$/, 
                exclude: /(node_modules)/,
                loaders: [
                    'babel?presets[]=es2015',                  
                    'ts-loader'
                ] 
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};