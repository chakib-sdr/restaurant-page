const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  // Check if we are running the local development server
  const isDevelopment = argv.mode !== "production";

  return {
    // Dynamically choose mode based on the CLI flag passed (defaults to development)
    mode: argv.mode || "development",

    entry: "./src/index.js",

    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: isDevelopment ? "/" : "/restaurant-page/",
      clean: true,
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      hot: false,
      liveReload: true,
      open: true,
      watchFiles: {
        paths: ["src/**/*"],
        options: {
          usePolling: true,
          interval: 500,
        },
      },
    },

    watchOptions: {
      poll: 500,
      ignored: /node_modules/,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};