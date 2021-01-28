'use strict';

// Navbar (스크롤에 따라 위로는 투명 아래로는 색 있도록)
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

// scroll 이벤트 함수 정의
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

//  Navbar의 탭 해당구간 연결
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Contact Me 버튼 연결
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});
