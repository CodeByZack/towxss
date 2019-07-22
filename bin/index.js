#! /usr/bin/env node

var program = require('commander');
const {resolve} = require('path');
const {watch} = require("../watch");

program
  .version('0.1.0')
  .option('-p, --path <path>', 'set the watching path')
  .parse(process.argv);

const path = program.path ? program.path : resolve("./"); 

console.log( "watching path:", path) 

watch(path)

