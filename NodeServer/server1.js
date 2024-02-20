var http = require('http');
var fs = require('fs')
//var filename1='hello.json'
var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.write('Welcome to Index page');
    res.end();
  }
  else if (req.url == "/emp") {
    console.log("HTTP works!");
    fs.readFile("page.html", "utf8", function (err, data) {
      if (err) {/*from w ww. j a v a 2 s .c o m*/
        console.log('Could not find or open file for reading\n');
      } else {
        //res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);

      }
    })
  }

  else if (req.url == "/admin") {
    1
    res.write('Welcome to Admin page');

    res.end();

  }

  else

    res.end('Invalid Request!');

});

server.listen(2020);

console.log('Server is running at port 2020')



// var fs = require('fs');
// var fileName = "hello.html";

// var http = require('http');
// var server = http.createServer(function (request, response) {
// console.log("HTTP works!");
// fs.readFile(fileName, "utf8", function(err, data){
// if (err){/*from w ww. j a v a 2 s .c o m*/
// console.log('Could not find or open file for reading\n');
// } else {
// response.writeHead(200, {"Content-Type": "text/html"});
// response.end(data);
// }
// })
// });
// server.listen(8080);
// console.log('Server is listened port:8080');