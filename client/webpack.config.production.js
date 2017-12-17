var path = require("path");
var webpack = require('webpack');

module.exports = [
    {
        entry: {
            search_page: path.join(__dirname, "src/search/index.js"),
            reviews: path.join(__dirname, "src/review/index.js")
        },
        output: {
            path: path.join(__dirname, "../app/assets/javascripts/webpack"),
            filename: "[name].bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.(css|scss)$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    }
];
