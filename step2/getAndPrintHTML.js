function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  var https = require('https') ;
  var arr = []
  var example = https.get(requestOptions , function (response)  {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      arr.push(data) ;
    } )
    response.on('end' , function(data) {
      console.log(arr)
    })
  })




}

getAndPrintHTMLChunks() ;