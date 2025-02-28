import { makeElement } from "./module/makeElement.js";
// makeElemet 모듈 사용 선언
import { setPosition } from "./module/setPosition.js";
// setPosition 모듈 사용 선언
import { setType } from "./module/setType.js";
// setType 모듈 사용 선언


const sections = document.querySelectorAll('section');
// 모든 섹션 태그의 배열을 선택자로 불러온다.

let tagName = ['form', 'input', 'input', 'textarea', 'button'];
// 만들 태그들을 배열로 만들어준다.
makeElement(tagName);
// makeElement 모듈을 통해 요소를 생성해준다.


tagName[0].action = '/data';
tagName[0].method = 'post';
// tagName[0]은 form이며, form의 action은 '/data', 메서드는 post로 설정해준다.

setType(tagName[1], 'name', '');
setType(tagName[2], 'title', '');
setType(tagName[3], 'main', '');
// setType으로, name,title,main을 작성할 input,textarea에 type을 지정해준다.

tagName[4].type = 'submit';
tagName[4].textContent = '작성'
// tagName[4]는 버튼, 버튼의 타입과 내용을 지정해준다.

let babys = [tagName[1], tagName[2], tagName[3], tagName[4]];
// form안에 들어갈 요소들을 배열로 만들어주고,
setPosition(tagName[0], babys);
// setPosition 모듈로, form에 babys들을 넣어준다.

sections[1].appendChild(tagName[0])
// 마지막으로 form태그는 2번째 섹션에 생성한다.