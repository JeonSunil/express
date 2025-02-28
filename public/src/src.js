const h1 = document.querySelector('h1');

const div = document.createElement('div');
div.textContent = '아룡하세연';

const a = document.createElement('a');
a.textContent = "이동";

if(h1.textContent === 'hi Fuck') {
  a.href = "/";
} else {
  a.href = 'about.html';
}

document.body.appendChild(div);
document.body.appendChild(a);