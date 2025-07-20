// webpack.config.js
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  externals: {
    vscode: 'commonjs vscode',
    'jsdom': 'commonjs jsdom',
    'axe-core': 'commonjs axe-core'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                module: 'esnext',
                target: 'es2020'
              },
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false, // Disable minification to prevent obfuscation issues
    splitChunks: false, // Disable code splitting
    runtimeChunk: false, // Ensure no runtime chunk
    removeAvailableModules: false,
    removeEmptyChunks: false,
    mergeDuplicateChunks: true,
    concatenateModules: true,
  },
  // Remove source maps for production security
  devtool: false,
  stats: {
    warnings: false
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
