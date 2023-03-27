const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss =require('tailwindcss')
const autoprefixer=require('autoprefixer')
module.exports = {
  entry: {
    popup: path.resolve ('./src/popup/index.tsx'),
    options:path.resolve('./src/options/options.tsx'),
    background:path.resolve('./src/background/background.ts'),
    contentScript:path.resolve('./src/contentScripts/index.tsx'),
    Tabs:path.resolve('./src/tab/components/index.tsx')
  },
  module:{
    rules:[
      {
        use:'ts-loader',
        test:/\.tsx$/,
        exclude:/node_modules/ 
      },
      {use:['style-loader','css-loader',
      {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              ident:'',
            plugins:[tailwindcss,autoprefixer]
      }}
    }
    ],
       test:/\.css$/i
    },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    ]
  },
  resolve:{
   extensions: ['.ts','.js','.tsx']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/static'),
         to: path.resolve('dist') }
        
      ]
    }),
    ...getHtmlWebpackPlugin(['popup','options','Tabs'])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].js'
  },
  optimization:{
    splitChunks:{
     chunks(chunk){
       return chunk.name !=='contentScript'
     }
  }}
};

function getHtmlWebpackPlugin(chunks) {
 return  chunks.map(chunk=>
    new HtmlWebpackPlugin({
      title:'Reactjs_convert to html',
      filename:`${chunk}.html`,
      chunks:[chunk],

    })
  )
  
}