const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");
const addBookBtn = document.querySelector("#addBtn");
const container = document.querySelector(".container");
let myLibrary = [];

// container.classList.toggle(".newBook");

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return [title, author, pages, read]
    }
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function example() {
    const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function example2() {
    const newBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");
    myLibrary.push(newBook);
    console.log(myLibrary);
}




addBookBtn.addEventListener("click", () => {

});