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
    compiler.plugin('done', function() {
        console.log('replace :< '+replaceFrom+"> to : <"+replaceTo+"> DONE");
    });
    compiler.plugin('emit', function(compilation, callback) {
        for (var filename in compilation.assets) {
                if(compilation.assets[filename].source().indexOf(replaceFrom)!=-1){
                    var newStr = compilation.assets[filename].source().replace(replaceFrom,replaceTo);
                    compilation.assets[filename].source = function() {
                        return newStr;
                    };
                }
        }
        callback();
    });
}

module.exports = HtmlResWebpackPlugin;