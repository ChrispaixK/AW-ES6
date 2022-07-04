import { link, sections } from './modules/links.js';
import DateTime from './modules/time.js';
import { ListOfBooks } from './modules/books.js';

setInterval(() => { document.getElementById('render-date').innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`; }, 1000);
const myBooks = new ListOfBooks();
window.myBooks = myBooks;
myBooks.bookOnLoad();
