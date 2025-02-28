const qs = require('querystring');
const fs = require('fs');
const layout = require('./layout/layout');

function deleteDataForm(req, res, i) {

req.on('data', function() {
  // post로 데이터를 받아 올 때, 기능을 추가하는 코드
  const jsonData = JSON.parse(fs.readFileSync('./data/data.json'));
  // jsonData라는 변수에 data.json파일의 데이터를 파싱해서 불러온다.
  console.log(jsonData);
  // jsonData를 확인.
  jsonData.splice(i, 1);
  // jsonData의 데이터 중에 수정요청을 보낸 순서의 데이터를 삭제한다.
  console.log(jsonData);
  // 수정된 jsonData를 확인한다.
  fs.writeFileSync('./data/data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
  // data.json파일의 내용을 덮어씌우는데, 위에서 수정한 jsonData의 데이터를 집어넣는다.
});
req.on('end', function() {
  res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
  res.write(layout('./public/src/module/layout/complete/completeDelete.js'));
  // 위의 행동이 끝나면 데이터가 성공적으로 삭제되었습니다. 라는 문구가 나온다.
  res.end();

})
}

module.exports = deleteDataForm;