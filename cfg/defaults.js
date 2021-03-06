/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
<<<<<<< HEAD
const dfltPort = 8001;
=======
const dfltPort = 8000;
>>>>>>> c80ce9b7eaaa15ebbb26daae261f2c652a6cade9

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
<<<<<<< HEAD
    preLoaders: [{
      test: /\.(js|jsx)$/,
      include: srcPath,
      loader: 'eslint-loader'
    }],
    loaders: [{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      //{
      //  test: /\.json$/,
      //  loader:'json-loader'
      //},
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svgs)$/,
        loader: 'url-loader?limit=8192'
      }, {
=======
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
      },
      //{
      //  test: /\.sass/,
      //  loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      //},
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
>>>>>>> c80ce9b7eaaa15ebbb26daae261f2c652a6cade9
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
<<<<<<< HEAD
};
=======
};
>>>>>>> c80ce9b7eaaa15ebbb26daae261f2c652a6cade9
