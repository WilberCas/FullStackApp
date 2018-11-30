const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,"/dist"),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    }
                },{
                    test: /\.scss$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ]
                },{
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                }
        ]
        
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash:true,
            filename: "index.html", // Target html
            template: "./src/index.html" // Source html
        })
    ]
}