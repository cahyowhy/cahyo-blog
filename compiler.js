const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {JSDOM} = require("jsdom");
const isDevelopment = process.env.NODE_ENV !== 'production';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const changeElement = (html, url) => {
    return new Promise((resolve) => {
        const {document} = new JSDOM(html).window;
        const component = url === '/' ? 'index-page' : (url.indexOf('/') === 0 ? url.substring(1) : url);

        let app = document.getElementById('app');
        app.innerHTML = '<div><' + component + '/></div>';

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

const getEnvironment = () => {
    return {
        entry: isDevelopment ? ['./src/main.js', "webpack-hot-middleware/client?noInfo=true&reload=true"] :
            ['./src/main.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[chunkhash].js'
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
        devtool: 'eval',
        plugins: [
            new ExtractTextPlugin({
                filename: 'static/css/[name].css',
                allChunks: true
            }),
        ]
    };
};

let environment = getEnvironment();
if (!isDevelopment) {
    environment.devtool = 'none';
    environment.plugins = (environment.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new BundleAnalyzerPlugin({analyzerPort: 4200}),
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
            routes: ['/', '/memulai-js-1', '/meminimalisasi-perubahan-var-js', '/macam-method-array-js', '/compile-file-csharp-cmd', '/reduce-js-file-size-webpack-context-replacement-plugin'],
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
    ]);

    module.exports = environment;
} else {
    environment.devtool = 'eval';
    environment.plugins = (environment.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            favicon: 'favicon.ico'
        }),
    ]);

    const express = require("express");
    const app = express();

    let template = null;
    const compiler = webpack([environment]);
    const devMiddleware = require("webpack-dev-middleware")(compiler, {logLevel: "silent", noInfo: true});
    const hotMiddleware = require("webpack-hot-middleware")(compiler, {heartbeat: 5000});

    compiler.plugin("done", () => {
        template = devMiddleware.fileSystem.readFileSync(path.join(environment.output.path, "index.html"), "utf-8");
    });

    app.set("env", "production");
    app.set("x-powered-by", false);
    app.set("view cache", true);
    app.set("etag", false);

    app.locals.ENV = 'production';
    app.locals.ENV_DEVELOPMENT = false;

    app.use(hotMiddleware);
    app.use(devMiddleware);

    app.use('/static', express.static(path.resolve(__dirname, 'static'), {
        maxAge: 60 * 60 * 24,
        immutable: true,
        redirect: false,
        index: false,
        etag: false
    }));

    app.use((req, res) => {
        console.info(`- Page request ${req.originalUrl || req.url}`);
        console.info(`- IP client ` +
            `${req.headers['x-forwarded-for'] || req.connection.remoteAddress} at ${new Date()}\n`);

        try {
            res.setHeader("Content-Type", "text/html");

            return res.end(template ? template : "<title>Being compiling, reload immediate...</title>");
        } catch (e) {
            console.log(e);
        }

        return res.end("<title>Internal Server Error<lo/title>");
    });

    app.listen((process.env.PORT || 8888), () => {
        console.log("\nPID#" + process.pid + ": Server started, listening at port " + (process.env.PORT || 8888));
    });
}
