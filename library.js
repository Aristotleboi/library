let myLibrary = [];


//book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//creates new book object in mylibrary array
function addBookToLibrary (title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

//clears the dom of library elements
function clearLibrary() {
    let cardsDiv = document.querySelector('#cards');
    let booksDiv = cardsDiv.querySelectorAll('div')
    booksDiv.forEach((div) => div.remove());
}

//displays all books in myLibrary
function dispayBooks() {
    clearLibrary();
    numberOfBooks = myLibrary.length
    for (let i = 0; i < numberOfBooks; i++) {
        const cards = document.getElementById('cards')
        let bookCard = document.createElement('div')
        bookCard.classList.add('book-card')
        let title = document.createElement('h3')
        title.innerText = myLibrary[i].title;
        let author = document.createElement('p')
        author.innerText = myLibrary[i].author;
        let pages = document.createElement('p')
        pages.innerText = myLibrary[i].pages;
        let read = document.createElement('button')
        read.innerText = myLibrary[i].read
        read.setAttribute('class', read.innerText)
        let closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'close-button')
        closeButton.innerText = "Remove Book From Library";
        let libraryNumber = i;
        let cardNumber = document.createElement('p');
        cardNumber.innerText = libraryNumber;
        cardNumber.setAttribute('class', 'card-number')
        console.log(libraryNumber)
        bookCard.append(title);
        bookCard.append(author);
        bookCard.append(pages);
        bookCard.append(read);
        bookCard.appendChild(closeButton)
        bookCard.appendChild(cardNumber)
        cards.append(bookCard);

        //function to allow button to remove library card
        closeButton.addEventListener('click', () => {
            cards.removeChild(bookCard)
        })

        read.addEventListener('click', () => {
            if (read.innerText === 'read') {
                read.innerHTML = 'unread';
                read.setAttribute('class', 'unread');
            } else {
                read.innerHTML = 'read';
                read.setAttribute('class', 'read');
            }
        })
    }
}

//example books
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '292 pages', "read");
addBookToLibrary('Stoner', 'John Williams', '300 pages', "read");

dispayBooks(myLibrary)

//function to allow html form to create new book card
function bookForm() {
    let bookTitle = document.querySelector('#book-title').value;
    let bookAuthor = document.querySelector('#author').value;
    let bookPages = document.querySelector('#pages').value;
    let bookRead = document.querySelector('input[type="checkbox"]');
    let bookReadValue = "unread"
    if (bookRead.checked) {
        bookReadValue = "read";
    }
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookReadValue);
    dispayBooks();
    closeModal(form)
}

const submitForm = document.querySelector("#submit");
submitForm.addEventListener('click', () => {
    bookForm();
})

//javascript for form popup

const openForm = document.querySelector('#add')
const overlay = document.getElementById('overlay')
openForm.addEventListener('click', () => {
    const form = document.querySelector('.form');
    openModal(form);
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}