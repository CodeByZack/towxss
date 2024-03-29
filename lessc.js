const fs = require( 'fs' )      // 引入 fs 文件读写模块
const less = require( 'less' )  // 引入 less 模块
const path = require( 'path' )  // 引入 path 路径模块

// readFile 第二个参数，可以指定编码类型
// 指定编码类型后，得到的数据会自动转换

function complieLess(srcPath,distPath){
    fs.readFile( srcPath, 'utf8', ( err, data ) => {
        // data.toString()
        if( err ) {
            throw err
        }
        // 这里我们读取到了 less 文件内容
        // console.log( data )
        // 在代码中调用 less
        less.render( data, ( err, css ) => {
            if( err ) {
                throw err
            }
    
            // 在这里我们得到了 less 编译后的 css 内容
            // console.log( css.css )
            // 下面就是要将 css.css 写入到文件中
            fs.writeFile( distPath, css.css, ( err ) => {
                if ( err ) {
                    throw err
                }
                // 输出 success 编译写入成功
                console.log('success:',distPath);
            })
    
        })
    
    })
}


module.exports = {
    build : complieLess
}