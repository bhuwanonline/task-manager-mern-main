const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // Entry point of your React application
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle filename
        publicPath: '/', // Public path for assets (e.g., '/static/')
    },
    module: {
        rules: [
            // JavaScript/JSX files
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
                    },
                },
            },
            // CSS files (optional)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
        ],
    },   
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: 'bundle.js',
      },
      mode:'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to HTML template
            // favicon: './public/favicon.ico', // Ppath to favicon (optional)
        }),
    ],
    devServer: {
        historyApiFallback: true, // Enable HTML5 History API fallback
    },
};
