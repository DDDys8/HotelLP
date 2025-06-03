// script.js

// フェードインアニメーション（Intersection Observer）
const fadeElems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeElems.forEach(el => observer.observe(el));

// ダミーフォーム送信処理
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('送信ありがとうございました！（※ダミー動作）');
    form.reset();
  });
}