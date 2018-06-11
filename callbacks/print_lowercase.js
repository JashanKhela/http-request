var getHTML = require('../step5/http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  v
  console.log(html.toLowerCase());

}

getHTML(requestOptions, printLowerCase);
