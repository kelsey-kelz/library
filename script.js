const myLibrary = [];//array to store the books

//a book constructor
function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
       console.log(`${title} by ${author}, ${pages} pages, ${readStatus}`) ;
    }
}

//take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
    displayBook(newBook);
    return newBook;
}

const book1 = addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295", "not read yet");
console.log(book1);
console.log(myLibrary);
const book2 = addBookToLibrary("The Bible", "J.R.R Tolkien", "295", "not read yet");
console.log(book2);
console.log(myLibrary);
const book3 = addBookToLibrary("The What is this", "J.R.R Tolkien", "295", "not read yet");
console.log(book3);
console.log(myLibrary);

function displayBook(book) {
const div = document.querySelector("div");

const bookElement = document.createElement("div");
bookElement.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.readStatus}</p>
    `;
    div.appendChild(bookElement);
}    