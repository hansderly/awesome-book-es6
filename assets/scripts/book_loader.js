import library from './modules/storage.js';

const loadBooks = () => {
  const bookWraper = document.querySelector('.bookWraper');
  let bookElement = '';
  library.forEach((book) => {
    bookElement += `
                <div class="book">
                <div id="book-title">${book.title} by ${book.author}</div>
                <button id="remove" onclick="remove(${book.id})" >Remove</button>
                </div>
                <hr> `;
  });
  bookWraper.innerHTML = bookElement.length === 0 ? '<p> No book </p> <hr><br>' : bookElement;
};

export default loadBooks;
