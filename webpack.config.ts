import path from "path";
import {Configuration} from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import {env} from "process";

const config: Configuration = {
   mode: (env.NODE_ENV as "production" | "development") ?? "development",
   entry: "./src/index.tsx",
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
         },
         {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
         }
      ]
   },
   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"]
   },
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
   },
   plugins: [
       new CopyWebpackPlugin({
          patterns: [{ from: "public" }]
       })
   ]
}

export default config;