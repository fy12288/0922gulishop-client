// 这个就是vue延生的webpack.config.js文件
// 可以当webpack.config.js用
// 记得改完要重启项目，npm run serve

// module.exports = {
//     lintOnSave: false,//禁用eslint
// }

// vue.config.js

module.exports = {
    lintOnSave: false//表示关掉代码检查，一般真实开发不用
    // 真正开发用的是lintOnSave: 'warning'，能编译但也会有错误提示
}