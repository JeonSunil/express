const sections = document.querySelectorAll('section');

const h1 = document.createElement('h1');
h1.textContent = "데이터가 성공적으로 수정 되었습니다"

sections[1].appendChild(h1);