const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

const librarySection = document.querySelector('.library');
const addBookSection = document.querySelector('.addBook');
const contactSection = document.querySelector('.contactInfo');

list.addEventListener('click', () => {
  librarySection.classList.remove('hide');
  addBookSection.classList.add('hide');
  contactSection.classList.add('hide');
});

addNew.addEventListener('click', () => {
  addBookSection.classList.remove('hide');
  librarySection.classList.add('hide');
  contactSection.classList.add('hide');
});

contact.addEventListener('click', () => {
  librarySection.classList.add('hide');
  addBookSection.classList.add('hide');
  contactSection.classList.remove('hide');
});

const option = {
  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
};
const today = new Date();
const todayFormat = today.toLocaleString('en-US', option);
const time = document.querySelector('.time-text');
time.innerHTML = todayFormat;