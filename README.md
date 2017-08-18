# html-replace-webpack-pugin

##作用:
替换webpack流生成后替换指定的内容


##使用示例
1. 引用方式
```
var htmlReplaceWepackPlugin = require('html-replace-wepack-plugin');
```
2. 使用方式

```
  var config = {
        // .....
      plugins: [
       // .....
          new HtmlReplaceWebpackPlugin({
              from:"sourceMappingURL=",
              to:"sourceMappingURL=http://10.1.8.12:7000/load?src=medplus_h5/",
              toServer:{
                  from: 'medplus_h5/js', // 要发送的文件目录
                  to:   'medplus_h5', // 在 sourcemap 文件服务器上保存的目录
                  match: '**/*.map', // 符合指定规则的文件
                  server: 'http://10.1.8.12:7000/upload' // sourcemap 文件服务器接受数据的接口
              }
          }),
      ],
  };

```
