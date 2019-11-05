var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');

btn.onclick = function () {
  this.classList.toggle('is-opened');
  nav.classList.toggle('nav_open');
};