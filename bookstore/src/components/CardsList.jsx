import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import cover from "../assets/book1.jpg";
import error from "../assets/error.jpg"
import { addBook } from "../store/slices/basketSlice.js";
import { useDispatch } from 'react-redux';

const CardsList = () => {
    const [booksList, setBooksList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(async (data) => {
                    setBooksList(await data.json());
                })        
                .catch((e) => {
                    setError(true)
                    console.log(e)
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        fetchData()
      }, [])

    let content;
    
    if (isLoading) {
        content =
            <div>
                <p>Идет загрузка каталога...</p>
            </div>;
    } else if(isError) {
        content = 
        <div className="error">
            <img className="error-img" src={error} alt="ошибка при загрузке страницы" />
            <p>Произошла ошибка при загрузке страницы, попробуйте позже</p>
        </div>;

    } else if (booksList.length === 0) {
        content =
            <div className="empty-list">
                <p>Нет доступных книг!</p>
            </div>;
    } else {
        content = 
        <div className="books-list">
            {
                booksList.map((book) => {
                    return <Card 
                        key={book.id} 
                        cover={cover}
                        price={book.userId} 
                        title={book.title} 
                        author='Author Author' 
                        description={book.body}  
                        onAddToCart={() => { dispatch(addBook(book)) }}
                    />
                })
            }
        </div>
    }

    return content; 
}

export default CardsList;