/**
 * 替换文件
 * @param {String} path 要替换的当前文件夹
 * @param {String} imgPatch 图片文件路径
 */
const fs = require('fs')
const childProcess = require('child_process');
function replaceFile (path, imgPatch) {
  fs.readdirSync(path).forEach(value => {
    if (value.includes('.png')) {
      childProcess.spawn('cp', ['-f', `${imgPatch}`, `${path}/${value}`])
    }
  })
  console.log('替换成功！')
}
module.exports = replaceFile
// replaceFile ('/Users', '/Users/patient-icon.png')