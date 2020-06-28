const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

require.extensions['.css'] = () => {
    return;
  };

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = 
{
    entry : './src/index.jsx',
    module : 
    {
        rules: [
            // we use babel-loader to load our jsx and tsx files
          {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'ts-loader']
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
                /* // for development mode
                {
                    loader: "style-loader",
                    options: {
                        singleton: true
                    }
                },
                */
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './static',
                        minimize: true
                    }
                },
                { loader: "css-loader" },
                { loader: "sass-loader" }
            ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
          }
        ]
    },
    output : 
    {
        filename : 'bundle.js',
        path : __dirname + '/public'
    },
    resolve: {
        extensions:['.ts', '.tsx', '.js', 'jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
      ],
      optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    node: {
      __dirname: false
    }

}