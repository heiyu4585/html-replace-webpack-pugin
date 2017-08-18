/**
 * @Desc：
 * @Usage:
 * @Notify：
 * @Depend：
 *
 * Created by WangNing on 2017/8/15.
 */

function HtmlResWebpackPlugin(opt) {
  this.options = opt;
}
HtmlResWebpackPlugin.prototype.apply = function(compiler, callback) {
    
    var replaceFrom = this.options.from,
        replaceTo = this.options.to;

    compiler.plugin('emit', function(compilation, callback) {
        // Explore each chunk (build output):
        compilation.chunks.forEach(function(chunk) {
            // Explore each asset filename generated by the chunk:
            chunk.files.forEach(function(filename) {
                /*不包含css*/
                if(filename.indexOf("css") == -1){
                    /*替换指定内容*/
                    var newStr = compilation.assets[filename].source().replace(replaceFrom,replaceTo);
                    compilation.assets[filename].source = function() {
                        return newStr;
                    };
                }
                // Get the asset source for each file generated by the chunk:
                // var source = compilation.assets[filename].source();
            });
        });
        compiler.plugin('done', function() {
            /*构建完后需要执行的事情*/
          console.log("执行完成")
        });
        callback();
    });
}

module.exports = HtmlResWebpackPlugin;