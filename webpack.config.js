const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {JSDOM} = require("jsdom");
const isDevelopment = !process.env.NODE_ENV === 'production';

const changeElement = (html, url) => {
    return new Promise((resolve) => {
        const {document} = new JSDOM(html).window;
        const component = url === '/' ? 'index-page' : (url.indexOf('/') === 0 ? url.substring(1) : url);

        let app = document.getElementById('app');
        app.innerHTML = '<div><' + component + '/></div>';

        let scriptFbSDK = document.getElementById('facebook-jssdk');
        scriptFbSDK.remove();

        let fbRoot = document.getElementById('fb-root');
        fbRoot.innerHTML = '';
        fbRoot.classList.remove('fb_reset');

        resolve(document.documentElement.outerHTML);
    });
};

const cssLoaders = (options) => {
    options = options || {};
    const generateLoaders = (loader, loaderOptions = {}) => {
        const loaders = [{
            loader: 'css-loader',
            options: {
                minimize: !isDevelopment,
                sourceMap: options.sourceMap
            }
        }];

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    minimize: !isDevelopment,
                    sourceMap: options.sourceMap,
                    extract: options.extract
                })
            });
        }

        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            });
        } else {
            return ['vue-style-loader'].concat(loaders);
        }
    };

    return {
        css: generateLoaders(),
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass')
    }
};

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
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    preserveWhitespace: false,
                    loaders: [
                        cssLoaders({
                            sourceMap: false,
                            extract: true
                        })
                    ]
                }
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
    devtool: 'eval',
    plugins: [
        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash].css',
            allChunks: true
        }),
    ]
};

if (!isDevelopment) {
    module.exports.devtool = 'none';
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
            skipThirdPartyRequests: true,
            routes: ['/', '/memulai-js-1', '/meminimalisasi-perubahan-var-js', '/macam-method-array-js', '/compile-file-csharp-cmd'],
            postProcess(renderedRoute) {
                return changeElement(renderedRoute.html, renderedRoute.originalRoute).then((val) => {
                    renderedRoute.html = val;

                    return renderedRoute;
                });
            },
            renderer: new Renderer({
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
