'use strict';

// Navbar (스크롤에 따라 위로는 투명 아래로는 색 있도록)
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

//  Navbar의 탭 해당구간 연결
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Nabvar 토글
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',() => {
  navbarMenu.classList.toggle('open');
});

// Contact Me 버튼 연결
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// 스크롤링 시 home 투명하게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤링 시 upBtn 나타내기
const upBtn = document.querySelector('.upBtn');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    upBtn.classList.add('showBtn');
  }else{
    upBtn.classList.remove('showBtn');
  }
});

// upBtn 클릭 시 최상단으로 올라가기
upBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

// works: 버튼클릭시 각 조건에 맞게 분할
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  // works: 선택한 버튼 클릭 시 해당 버튼 활성화
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === 'all' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      }else{
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});





// scroll 이벤트 함수 정의
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

