/**
 * Created by Yang Kefan on 2017/11/24.
 */
let path = require("path");
module.exports = {
    entry: {
        actions: "./public/js/actions.js"
    },
    output: {
        path: __dirname + "/public/build",
        filename: "[name].bundle.js"
    }
};