const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   mode: 'development',
   // mode: 'production',
   entry: './src/index.ts',
   // devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.ts?$/,
            loader: 'ts-loader',
         },
         // {
         //    test: /\.(js|ts)$/,
         //    use: {
         //       loader: 'babel-loader',
         //       options: {
         //          // presets: ['@babel/preset-typescript'],
         //          plugins: [
         //             'babel-plugin-transform-typescript-metadata',
         //             [
         //                '@babel/plugin-proposal-decorators',
         //                {
         //                   legacy: true
         //                }
         //             ]
         //          ]
         //       }
         //    }
         // }
      ]
   },
   plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      // new webpack.ProvidePlugin({
      //    process: 'process/browser',
      // }),
   ],
   resolve: {
      extensions: ['.ts', '.js']
   },
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
      globalObject: 'global',
      libraryTarget: 'umd',
      // library: 'server'
   },
   externals: {
      // ['firebase/compat/app']: {
      //    commonjs: 'firebase/compat/app',
      //    commonjs2: 'firebase/compat/app',
      //    amd: 'firebase/compat/app',
      //    root: 'firebase',
      // },
      // ['firebase/compat/database']: {
      //    commonjs: 'firebase/compat/database',
      //    commonjs2: 'firebase/compat/database',
      //    amd: 'firebase/compat/database',
      //    root: '',
      // },

   },
   // optimization: {
   //    runtimeChunk: 'single',
   // },
   experiments: {
      // asyncWebAssembly: true,
      // buildHttp: true,
      // layers: true,
      // lazyCompilation: true,
      // outputModule: true,
      // syncWebAssembly: true,
      // topLevelAwait: true,
   }
};
