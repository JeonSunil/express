function resForm (res, code, element, file) {
res.writeHead(code, {'content-type': `text/${element}; charset=utf-8`});
//  res는 말그대로 response,element는 불러올 형식을 의미한다.
 res.write(file);
//  file은 불러올 파일의 이름을 이야기 한다.
 res.end();
}

module.exports = resForm;