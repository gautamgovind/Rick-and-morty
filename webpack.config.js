const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'), // it will create dist folder and out file or buldle file will go there
        filename: 'rick-and-marty.min.js',  // generated min script file
    }, 
    devtool: 'inline-source-map', // for development view
    mode: 'development',
    module: {
        rules: [
                { test: /\.jsx$/, use: 'babel-loader' },
                { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] } // scss -> css -> style-loader
        ],
    },  
    plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
               
            ],
            resolve: {extensions: ['.js', '.jsx']}

};