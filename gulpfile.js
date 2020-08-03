const { src, dest } = require('gulp');
const { path } = require('path');
var merge = require('merge-stream')

function defaultTask(cb) {
  files = [
    './node_modules/jquery-bootgrid/dist/jquery.bootgrid.css',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/jquery-bootgrid/dist/jquery.bootgrid.js'
  ].map(file => moveFileToPublicFolder(file));
  
  return merge(files)
}

function moveFileToPublicFolder(file) {
  var folder = "css"
  if(file.endsWith(".js")) folder = "js"
  
  return src(file).pipe(dest('./public/' + folder))
}

exports.default = defaultTask