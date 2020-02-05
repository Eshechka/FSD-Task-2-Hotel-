const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
src: path.join(__dirname, 'src'),
dist: path.join(__dirname, 'dist')
};


const fs = require('fs');
const PAGES_DIR = `${PATHS.src}/pages/`;

// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


function getFilesPathes(startPath, filter) {
  let filePathes = [];
  let files = fs.readdirSync(startPath);

  for(var i=0;i<files.length;i++) {
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
    'index': PATHS.src + '/pages/index/index.js',
    'services': PATHS.src + '/pages/services/services.js',
    'about_us': PATHS.src + '/pages/about_us/about_us.js'
  },

  output: {
    path: PATHS.dist,
    filename: './js/[name].[contenthash].js'
  },

  devServer: {
    port: 4200,
    stats: 'errors-only',
  },

  //   optimization: {
  //     splitChunks: {
  //       chunks: 'all'
  //   }

  // },

  plugins: [

    ...getFilesPathes(PAGES_DIR, '.pug').map(page => new HtmlWebpackPlugin ({
          template: page,
          filename: `./${path.basename(page).replace(/\.pug/,'.html')}`,
          // chunks: [`${path.basename(page, path.extname(page))}`],
          chunks: [path.basename(page, path.extname(page))],
    })),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
          filename: 'style.[contenthash].css',
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
            
            },
          },
          'css-loader',
          'sass-loader',
        ],

    },

    {
    test: /\.pug$/,
    loader: 'pug-loader',
      options: {
      pretty: true
      }
    },

    {
    test: /\.(ttf|woff|woff2|eot)$/,
    use: ['file-loader']
    },

    {
      test: /\.(svg|png)$/,
      loader: 'file-loader',
      options: {
        name: '/[name].[ext]',
        outputPath : 'img/',
      },
    },


  ]
  }


};