module.exports = {
    // ... outras configurações do Webpack ...
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  };