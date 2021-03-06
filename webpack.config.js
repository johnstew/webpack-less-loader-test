const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
                loader: 'css-loader',
                options: {
                    url: false
                }
            },
            {
                loader: 'less-loader',
                options: {
                    relativeUrls: true
                }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
}