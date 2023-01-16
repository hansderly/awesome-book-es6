import Book from './modules/Book.js';

const form = document.querySelector('.form');
const { title, author } = form.elements;

const remove = (index) => {
  Book.remove(index);
  Book.saveTolocalStorage();
};
remove();

const addBook = (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(bookTitle, bookAuthor);
  newBook.add();
  Book.saveTolocalStorage();
  form.reset();
};
form.addEventListener('submit', addBook);

export {
  addBook,
  remove,
};