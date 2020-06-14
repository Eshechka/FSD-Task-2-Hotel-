const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};


const PAGES_DIR = `${PATHS.src}/pages/`;

// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


function getFilesPathes(startPath, filter) {
  let filePathes = [];
  let files = fs.readdirSync(startPath);

  for(let i=0; i<files.length; i++) {
    let filename = path.join(startPath, files[i]);
    let stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      filePathes = filePathes.concat(getFilesPathes(filename, filter));
    }
    else if ((filename.indexOf('base_template.pug') === -1) && (filename.indexOf(filter)) >= 0) {
        filePathes.push(filename);
    };
  };
  return filePathes;
}


module.exports = {
  entry: {

    'UIKit': PATHS.src + '/pages/UIKit/UIKit.js',
    'index': PATHS.src + '/pages/index/index.js',
    // 'services': PATHS.src + '/pages/services/services.js',
    // 'about_us': PATHS.src + '/pages/about_us/about_us.js'
  },

  output: {
    // publicPath: ASSET_PATH,
    path: PATHS.dist,
    publicPath: '/FSD-Task-2-Hotel-/',
    filename: './js/[name].[contenthash].js'
  },

  devServer: {
    port: 3000,
    stats: 'errors-only',
    index: 'UIKit.html',
    openPage: '',
  },

  //   optimization: {
  //     splitChunks: {
  //       chunks: 'all'
  //   }

  // },

   // resolve: {
   //      alias: {
   //          './inputmask/lib/dependencyLibs/inputmask.dependencyLib': './inputmask/lib/dependencyLibs/inputmask.dependencyLib.jquery'
   //      }
   //  },


  plugins: [

    new webpack.ProvidePlugin({
     $: 'jquery/dist/jquery.js',
     // jQuery: "jquery/dist/jquery.min.js",
     // "window.jQuery": "jquery/dist/jquery.min.js",
    }),


    ...getFilesPathes(PAGES_DIR, '.pug').map(page => new HtmlWebpackPlugin ({
          template: page,
          filename: `./${path.basename(page).replace(/\.pug/,'.html')}`,
          // chunks: [`${path.basename(page, path.extname(page))}`],
          chunks: [path.basename(page, path.extname(page))],
    })),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
          filename: './style.[contenthash].css',
      }),



  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
                use: [
            {
              loader: MiniCssExtractPlugin.loader,
                options: {
                  name: 'style/[name].[ext]',
                }
            },
            
            {
              loader: 'css-loader',
                options: {
                  // url: false,
                }
            },

            {
              loader: 'resolve-url-loader',
            },

            'sass-loader',
          ],

      },

      {
      test: /\.pug$/,
      loader: 'pug-loader',
        options: {
          pretty: true,
        }
      },

      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        include: [
          path.resolve(__dirname, 'src/fonts/'),
        ],
        loader: 'file-loader',

        options: {
          name: 'fonts/[name].[ext]',
        },
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/,
        exclude: [/fonts/],
        loader: 'file-loader',

        options: {
          name: 'img/[name].[ext]',
        },
      },

      {
          // Exposes jQuery for use outside Webpack build
          test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: 'jQuery'
          },{
            loader: 'expose-loader',
            options: '$'
          }]
      },

    ]
}

};