let myLibrary = [];//array to store the books

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

Book.prototype.toggleReadStatus = function() {
    this.readStatus = this.readStatus === "Read" ? "Not Read Yet" : "Read";              
}

//take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
    displayBook(newBook);
    return newBook;
}

function displayBook(book) {
const list = document.getElementById("list");
list.innerHTML = "";
myLibrary.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.readStatus}</p>
        <button class="toggle-read" data-id="${book.id}">${book.readStatus === "Read" ? "Not Read Yet" : "Read"}</button>
        <button class="remove" data-id="${book.id}">Remove</button>
        `;
    list.appendChild(bookElement);
})

//eventListener to toggle "Read" button
const toggleButtons = document.querySelectorAll(".toggle-read");
toggleButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        const book = myLibrary.find(book => book.id === id);
        book.toggleReadStatus();
        displayBook();
    })
})

//eventListener to "Remove" button
const removeButtons = document.querySelectorAll(".remove");
removeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        myLibrary = myLibrary.filter(book => book.id !== id);
        displayBook(book);
    })
})
} 

document.getElementById("new-book").addEventListener("click", () => {
    document.getElementById("book-form").style.display = "block";
})

document.getElementById("submit-book-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("read-status").value;
    addBookToLibrary(title, author, pages, readStatus);
    document.getElementById("book-form").style.display = "none";
    document.getElementById("book-form-inner").reset();
})

//sample books to test the display function
const book1 = addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295", "not read yet");
const book2 = addBookToLibrary("A Fancy Book Title", "Famous Author", "295", "not read yet");
const book3 = addBookToLibrary("Another Thriller", "Thriller Writer", "295", "not read yet");
