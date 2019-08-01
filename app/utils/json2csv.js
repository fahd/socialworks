var csvWriter = require('csv-write-stream')
var fs = require('fs')
var path = require('path')
let dest = path.join(__dirname,'public')

function json2csv (file) {
  let keys = Object.keys(file['volunteers'])
  let fields = Object.keys(file['volunteers'][keys[0]])
  var writer = csvWriter({ headers: fields})
  writer.pipe(fs.createWriteStream(dest + '/socialworks.csv'))
  for (var key in file['volunteers']){
    var array = []
    for (var item in file['volunteers'][key]){
      array.push(file['volunteers'][key][item])
    }
    writer.write(array)
  }
  writer.end()
}

module.exports = json2csv;
