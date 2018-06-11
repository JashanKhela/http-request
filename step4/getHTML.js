function getHTML (options, callback) {
  var https = require('https') ;
  var arr = []
  var example = https.get(options , function (response)  {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      arr.push(data) ;
    } )
    response.on('end' , function(data) {
      callback(arr)
    })
  })







}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


console.log(getHTML(requestOptions, printHTML))

