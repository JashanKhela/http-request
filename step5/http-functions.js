module.exports = function getHTML (options, callback) {
var https = require('https') ;
  var arr = ''
  var example = https.get(options , function (response)  {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      arr += data ;
    } )
    response.on('end' , function(data) {
      callback(arr)
    })
  })
};
