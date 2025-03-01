const express = require('express');
const dataForm = require('./public/src/module/dataForm');
const updateForm = require('./public/src/module/updateForm');
const deleteForm = require('./public/src/module/deleteForm');
const app = express();
const port = 8000;

app.use(express.static('public'));
// 정적으로 public 폴더를 불러온다.
app.use('/data', express.static('data'));
// 정적으로 data 폴더를 불러온다.

app.listen(port, function() {
console.log( `http://localhost:${port}/ is Open..`)
});
// 서버 실행 코드

app.post('/data', function(req,res) {
  // post요청url이 /data일 때
  dataForm(req,res);
  // dataForm 모듈을 실행.
  req.on('end', function() {
  res.sendFile(__dirname + '/public/data.html');
  // dataForm 모듈실행이 완료되면, 현재 app.js경로 /public폴더 안의 data.html을 불러온다.
  });
});

app.post('/update*', function(req,res) {
  // '*'는 와일드 카드로, 문자열 뒤에 어떠한 문자든 올 수 있음을 의미한다.
  //  /update 자체를 포함한 /update로 시작하는 모든 문자열의 경로를 불러온다.
  // 즉 일부분 startsWith의 역할을 할 수 있기에 나는 와일드 카드를 사용하여 startsWith의 역할을 대신 하였다.
  // post요청의 url이 /update로 시작하는 문자열 일 때, 
  const i = req.url.split('update')[1];
  // 요청하는 url의 update뒤의 글자를 i로 지정.
  updateForm(req,res,i);
  // updateForm 모듈을 사용.
  req.on('end', function() {
  res.sendFile(__dirname + '/public/update.html');
  // dataForm 모듈실행이 완료되면, 현재 app.js경로 /public폴더 안의 update.html을 불러온다.

  });
});

app.post('/delete*', function(req,res) {
  // '*'는 와일드 카드로, 문자열 뒤에 어떠한 문자든 올 수 있음을 의미한다. 
  // /delete 자체를 포함한 /delete로 시작하는 모든 문자열의 경로를 불러온다.
  // 즉 일부분 startsWith의 역할을 할 수 있기에 나는 와일드 카드를 사용하여 startsWith의 역할을 대신 하였다.
  // post요청의 url이 /delete로 시작하는 문자열 일 때, 
  const i = req.url.split('delete')[1];
  // 요청하는 url의 delete뒤의 글자를 i로 지정.
  deleteForm(req,res,i);
  // deleteForm 모듈을 사용.
  req.on('end', function() {
  res.sendFile(__dirname + '/public/delete.html');
  // dataForm 모듈실행이 완료되면, 현재 app.js경로 /public폴더 안의 delete.html을 불러온다.

  });
});

// 이제 지정하지 않은 url에 대한 err핸들링을 해 줘야 할듯.
app.get('/*', function(req, res) {
  // get요청에서, /* 카드로, /이후로 들어오는 모든 요청에 대한 응답으로 설정하고,
  res.status(404).sendFile(__dirname + '/public/err.html');
  // 응답하는 파일을 에러 화면으로 떠오르게 만들었다.
  // status(404)를 넣어주면, 되었다.
});
