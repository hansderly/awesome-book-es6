import data from './storage.js';

// eslint-disable-next-line import/no-mutable-exports
let library = JSON.parse(data) || [];

class Book {
  constructor(title, author) {
    this.id = Math.random();
    this.title = title;
    this.author = author;
  }

  add() {
    library.push(this);
  }

  static remove(id) {
    library = library.filter((el) => el.id !== +id);
  }

  static saveTolocalStorage() {
    localStorage.setItem('library', JSON.stringify(library));
  }
}

export { Book, library };
