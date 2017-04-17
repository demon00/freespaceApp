// в консоле пишем node server/server.js тем самым запускаем сервер localhost:3000

let http = require('http');
let static = require('node-static');
let file = new static.Server('.', {
   cache: 0
});

function accept(req, res) {
  if(req.url.indexOf('/data') === 0) {   // поиск в директории /data
    setTimeout(function () {    // эмуляция задержки сервера
      file.serve(req, res);
    }, 1000);
  }
     else {
      req.url = '/public' + req.url; // поиск файлов выберет index.html если не указан какой именно выбрать
      file.serve(req, res);
    }
}

http.createServer(accept).listen(3000);  // localhost:3000

console.log('Server running on port 3000');