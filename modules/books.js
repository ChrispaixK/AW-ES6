export default class ListOfBooks {
  constructor() {
    this.books = (localStorage.myBooks != null) ? JSON.parse(localStorage.myBooks) : [];
  }

  newBook =() => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    if (title.value === '' || author.value === '') {
      alert('Please fill in all fields');
    } else {
      this.books.push({ title: title.value, author: author.value });
      this.updateLocalStorage();
      title.value = '';
      author.value = '';
    }
  }

  removeBook =(id) => {
    this.books.splice(id, 1);
    this.updateLocalStorage();
    this.bookOnLoad();
  }

  showBooks =() => {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;

    this.books.forEach((book) => {
      books.innerHTML += `
      <div class="book-item">
      <div class="title"> 
         <p>"${book.title}" by ${book.author}</p>
        </div>
       <div class="btn">
         <button onClick="myBooks.removeBook(${id})">Remove</button>
       </div>
       </div>`;
      id += 1;
    });
  }

  updateLocalStorage =() => {
    localStorage.myBooks = JSON.stringify(this.books);
    this.showBooks();
  }

  // load books if local storage not empty
  bookOnLoad =() => {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;
    if (this.books.length > 0) {
      this.books.forEach((book) => {
        books.innerHTML += `
        <div class="book-item">
        <div class="title"> 
         <p>"${book.title}" by ${book.author}</p>
        </div>
       <div class="btn">
         <button onClick="myBooks.removeBook(${id})">Remove</button>
       </div>
       </div>
       `;
        id += 1;
      });
    } if (this.books.length === 0) {
      books.innerHTML += `
     <p class="alert">The Library is empty</p>
     `;
    }
  }
}
