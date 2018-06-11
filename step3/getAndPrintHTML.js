function getAndPrintHTMLChunks (options) {


  var https = require('https') ;
  var arr = []
  var example = https.get(options , function (response)  {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      arr.push(data) ;
    } )
    response.on('end' , function(data) {
      console.log(arr)
    })
  })




}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
getAndPrintHTMLChunks(requestOptions) ;