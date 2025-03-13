const addBookButtons = document.querySelectorAll('.btn');
const booksBasket = document.querySelector('.user-books-list');
const addedBooks = [];

const showAddedBooksList = (booksList) => {
    booksBasket.innerHTML = '';

    if (booksList.length === 0) {
        booksBasket.innerText = 'Ваша корзина пуста';
        return;
    }

    booksList.forEach((book) => {
        bookName = document.createElement('p');
        bookName.innerText = book;
        booksBasket.append(bookName);
    })
}

addBookButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const bookName = btn.previousSibling.previousSibling.textContent;

        if (!addedBooks.includes(bookName)) {
            addedBooks.push(bookName);
        }

        showAddedBooksList(addedBooks);
    })
})

showAddedBooksList(addedBooks);