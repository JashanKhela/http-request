function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  var https = require('https') ;
  var example = https.get(requestOptions , function (response)  {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data + '/n')
    } )
  }



}

getAndPrintHTMLChunks() ;