const qs = require('querystring');
const fs = require('fs');
const layout = require('./layout/layout');
const resForm = require('./resForm');

function dataForm(req, res) {

req.on('data', function(data) {
  // post로 데이터를 받아 올 때, 기능을 추가하는 코드
  console.log(data.toString());
  // post로 받아온 데이터를 문자열로 나타내서 확인 
  const dataPar = qs.parse(data.toString());
  // post로 받아온 데이터를 문자열로 나타내면 그 데이터는 쿼리스트링 형식으로 작성되어있기 때문에 dataPar라는 변수에 qs.parse로 파싱(해석)하고, 객체로 변환하는 코드 
  console.log(dataPar);
  // post로 받아온 데이터가 잘 객체로 변환되었는지 확인.
  const dataArr = [];
  // dataArr라는 빈 배열을 생성
  dataArr.push(dataPar)
  // 빈배열 안에 post데이터를 파싱한 객체를 집어넣는다. 이렇게 하면 파싱된 객체를 배열로서 사용할 수 있다.

  if(fs.existsSync('./data/data.json')) {
    // 만일 data.json이라는 파일이 존재한다면
    const jsonData = JSON.parse(fs.readFileSync('./data/data.json'));
    // jsonData에 data.json파일을 해석해서 객체로 만들고,
    console.log(jsonData);
    // jsonData 확인
    jsonData.push(dataPar);
    // jsonData배열에 parseData객체를 넣는다.
    fs.writeFileSync('./data/data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
    // jsonData를 json파일로 변경.
    // 모양은 원래 json내용 + 추가된 내용 을 덮어씌우는 형태

  } else {
    // data.json파일이 존재하지 않는다면
  fs.writeFileSync('./data/data.json', JSON.stringify(dataArr, null, 2), 'utf-8');
  // 위에서 만들어진 파싱된 데이터가 들어있는 배열을 data.json 파일을 생성 해준다.
  }
})
req.on('end', function() {
  resForm(res, 200, 'html', layout('./public/src/module/layout/complete/completeAdd.js'));
})
}

module.exports = dataForm;