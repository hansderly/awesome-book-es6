import { Book } from './Book.js';
import loadBooks from './book_loader.js';

const form = document.querySelector('.form');
const remove = document.querySelector('.bookWraper');
const { title, author } = form.elements;

loadBooks();

const addBook = (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(bookTitle, bookAuthor);
  newBook.add();
  Book.saveTolocalStorage();
  loadBooks();
  form.reset();
};
form.addEventListener('submit', addBook);

remove.addEventListener('click', (event) => {
  if (event.target.type !== 'submit') return;
  const { id } = event.target;
  Book.remove(id);
  Book.saveTolocalStorage();
  loadBooks();
});

export { form, addBook, remove };
