const form = document.querySelector('.form');
const { title, author } = form.elements;
const data = localStorage.getItem('library');
let library = JSON.parse(data) || [];

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
loadBooks();

class Book {
  constructor(title, author) {
    this.id = Math.random();
    this.title = title;
    this.author = author;
  }

  add() {
    library.push(this);
    loadBooks();
  }

  static remove(id) {
    library = library.filter((el) => el.id !== id);
    loadBooks();
  }

  static saveTolocalStorage() {
    const libraryStringify = JSON.stringify(library);
    localStorage.setItem('library', libraryStringify);
  }
}

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