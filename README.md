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
              to:"sourceMappingURL=http://192.168.1.0",
              callBack:function(){
                console.log("webpack执行完成后调用")
              }
          }),
      ],
  };

```
