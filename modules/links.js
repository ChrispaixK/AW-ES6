export const link = document.querySelectorAll('.nav-link');
const booksListSection = document.querySelector('#books-list');
const addBookSection = document.querySelector('#add-book-container');
const contactSection = document.querySelector('#contact');
export const sections = [booksListSection, addBookSection, contactSection];

link[0].addEventListener('click', () => {
  link[0].classList.add('active');
  link[0].classList.remove('inactive');
  sections[0].classList.remove('nodisplay');
  link[1].classList.add('inactive');
  link[2].classList.add('inactive');
  sections[1].classList.add('nodisplay');
  sections[2].classList.add('nodisplay');
});

link[1].addEventListener('click', () => {
  link[1].classList.add('active');
  link[1].classList.remove('inactive');
  link[0].classList.add('inactive');
  link[2].classList.add('inactive');
  sections[1].classList.remove('nodisplay');
  sections[0].classList.add('nodisplay');
  sections[2].classList.add('nodisplay');
});

link[2].addEventListener('click', () => {
  link[2].classList.add('active');
  link[2].classList.remove('inactive');
  link[0].classList.add('inactive');
  link[1].classList.add('inactive');
  sections[2].classList.remove('nodisplay');
  sections[0].classList.add('nodisplay');
  sections[1].classList.add('nodisplay');
});