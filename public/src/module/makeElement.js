function makeElement(tagName) {
  for(let n=0; n<tagName.length; n++) {
    // 인자 배열의 수만큼 반복한다.
  tagName[n] = document.createElement(tagName[n]);
  // 요소를 생성하는 것을 인자 배열의 수만큼 반복한다.
}};

export { makeElement };