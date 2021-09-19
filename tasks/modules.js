const {
    src,
    dest
} = require('gulp');

const webpack = require('webpack-stream');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function modules() {
    return src('src/js/entry.js')
        .pipe(webpack({
            watch: true,
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            plugins: [
                new BrowserSyncPlugin({
                    host: 'localhost',
                    port: 3000,
                    server: { baseDir: ['build'] }
                })
            ],
            entry: {
                common: './src/js/common.js',
                index: './src/js/index.js'
            },
            output: {
                filename: '[name].js',
            },
        }))
        .pipe(dest('build/js'))
}