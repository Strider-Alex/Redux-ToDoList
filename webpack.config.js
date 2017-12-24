/**
 * Created by Yang Kefan on 2017/11/24.
 */
let path = require("path");
module.exports = {
    entry: "./public/js/index.js",
    output: {
        path: __dirname + "/public/build",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.json$/, use: 'json-loader'}
        ]
    }
};