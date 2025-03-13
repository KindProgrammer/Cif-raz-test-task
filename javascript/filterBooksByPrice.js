const booksList = [
    { title: "Книга 1", price: 300 }, 
    { title: "Книга 2", price: 500 }, 
    { title: "Книга 3", price: 200 }, 
    { title: "Книга 4", price: 399 }, 
    { title: "Книга 5", price: 400 }, 
    { title: "Книга 6", price: 5000 } 
];

const filterBookByPrise = (bookList) => {
    const newList = [];

    bookList.forEach((book) => {
        if (book.price >= 400) {
            newList.push(book);
        }
    })

    return newList;
}

// Вариант с filter:
const filterBookByPriseByFilter = (bookList) => bookList.filter((book) => book.price >= 400);

console.log(filterBookByPrise(booksList));
console.log(filterBookByPriseByFilter(booksList));