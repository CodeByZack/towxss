#! /usr/bin/env node
const path  = require("path");  // 引入 path 路径模块
const lessc = require("./lessc");
const nodewatch = require('node-watch');

function watch(root){
  nodewatch(root, { recursive: true,filter: /\.less$/ }, function(evt, name) {

    if (evt == 'remove') {
      // on delete
      console.log('%s removed。。。', name);
      return 
    }

    console.log('%s changed.', name);
    let srcPath = name;
    let distPath =  name.replace("less","wxss");
    lessc.build(srcPath,distPath);
  });
}

module.exports = {
  watch : watch
}
