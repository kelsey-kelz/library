let h1 = document.querySelector("h1");

h1.setAttribute("style", "color:blue; background:white;");


const myLibrary = [];

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

// const book1 = new Book("The Hobbit", "J.R.R Tolkien", "295", "not read yet");
// console.log(book1.info());

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
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
