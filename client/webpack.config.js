var path = require("path");
var webpack = require('webpack');

module.exports = [
    {
        entry: {
            timeline: path.join(__dirname, "./src/timeline/index.js"),
            comment: path.join(__dirname, "./src/comment/index.js")
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
        }
    }
];
