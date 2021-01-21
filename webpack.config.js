const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const config = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,
        publicPath: '/',
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'South System Books',
            filename: 'index.html',
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new WebpackPwaManifest({
            inject: true,
            name: 'South System Books',
            short_name: 'South System Books',
            background_color: '#ffffff',
            start_url: '.',
            display: 'standalone',
            theme_color: '#000000',
            icons: [
                {
                    src: path.resolve('public/favicon.ico'),
                    sizes: '64x64 32x32 24x24 16x16',
                    destination: path.join('public'),
                    type: 'image/x-icon'
                },
                {
                    src: path.resolve('public/logo16.png'),
                    destination: path.join('public'),
                    sizes: '64x64 32x32 24x24 16x16'
                },
                {
                    src: path.resolve('public/logo32.png'),
                    destination: path.join('public'),
                    sizes: '64x64 32x32 24x24 16x16'
                },
                {
                    src: path.resolve('public/logo225.png'),
                    destination: path.join('public'),
                    sizes: '512x512 256x256 128x128'
                },
                {
                    src: path.resolve('public/logo225.png'),
                    sizes: '512x512 256x256 128x128',
                    destination: path.join('public'),
                    purpose: 'maskable'
                },
                {
                    ios: true,
                    src: path.resolve('public/apple-touch-icon.png'),
                    destination: path.join('public'),
                    sizes: '180x180',
                }
            ]
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = (env, argv) => {
    if (argv.hot) {
        config.output.filename = '[name].[hash].js'
    }

    config.mode = env.production ? 'production' : 'development'

    config.plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
        'process.env.DEBUG': JSON.stringify(env.DEBUG),
        'process.env.production': JSON.stringify(env.production),
    }))

    return config
}