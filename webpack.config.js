const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false,
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: path.resolve(__dirname, 'dist/index.html'),
            favicon: 'favicon.ico'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new PrerenderSPAPlugin({
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            },
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/memulai-js-1', '/meminimalisasi-perubahan-var-js', '/macam-method-array-js'],
            postProcess(renderedRoute) {
                const rgxFBCommentSec = /(<div class="comment-section"(?: \w+="[^"]+")*>(.*?)<\/div>)/g;
                const replaceValRgxFbCommentSec = `<div class="comment-section"> <div class="fb-comments"
                     data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                     data-width="100%" data-numposts="5"></div></div>`;

                const rgxFBRoot = /(<div id="fb-root"(?: \w+="[^"]+")*>(.*?)<\/div>)/g;
                const replaceValFBRoot = '<div id="fb-root"></div>';

                const rgxScriptFBJSDK = /(<script id="facebook-jssdk"(?: \w+="[^"]+")*>(.*?)<\/script>)/g;

                renderedRoute.html = renderedRoute.html.replace(rgxFBCommentSec, replaceValRgxFbCommentSec);
                renderedRoute.html = renderedRoute.html.replace(rgxFBRoot, replaceValFBRoot);
                renderedRoute.html = renderedRoute.html.replace(rgxScriptFBJSDK, '');

                return renderedRoute;
            },
            renderer: new Renderer({
                inject: {
                    foo: 'bar'
                },
                headless: true,
                renderAfterDocumentEvent: 'render-event'
            })
        }),
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'static'), to: path.resolve(__dirname, 'dist/static')}
        ])
    ])
} else {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            favicon: 'favicon.ico'
        }),
    ])
}
