const qs = require('querystring');
const fs = require('fs');
const layout = require('./layout/layout');

function updateForm(req, res, i) {

req.on('data', function(data) {
  // post로 데이터를 받아 올 때, 기능을 추가하는 코드
  console.log(data.toString());
  // post로 받아온 데이터를 문자열로 나타내서 확인 
  const dataPar = qs.parse(data.toString());
  // post로 받아온 데이터를 문자열로 나타내면 그 데이터는 쿼리스트링 형식으로 작성되어있기 때문에 dataPar라는 변수에 qs.parse로 파싱(해석)하고, 객체로 변환하는 코드 
  console.log(dataPar);
  // post로 받아온 데이터가 잘 객체로 변환되었는지 확인.
  const jsonData = JSON.parse(fs.readFileSync('./data/data.json'));
  // jsonData라는 변수에 data.json파일의 데이터를 파싱해서 불러온다.
  console.log(jsonData);
  // jsonData를 확인.
  jsonData.splice(i, 1, dataPar);
  // jsonData의 데이터 중에 수정요청을 보낸 순서의 데이터를 삭제하고, dataPar 객체를  집어넣는다.
  console.log(jsonData);
  // 수정된 jsonData를 확인한다.
  fs.writeFileSync('./data/data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
  // data.json파일의 내용을 덮어씌우는데, 위에서 수정한 jsonData의 데이터를 집어넣는다.
});

}

module.exports = updateForm;