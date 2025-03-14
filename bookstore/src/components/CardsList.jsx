import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import cover from "../assets/book1.jpg";

const CardsList = () => {
    const [booksList, setBooksList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);

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
        <div>
            <p>Произошла ошибка при загрузке</p>
        </div>;

    } else if (booksList.length === 0) {
        content =
            <div>
                <p>Нет доступных книг!</p>
            </div>;
    } else {
        content = booksList.map((book) => {
            const addToCart = () => {
                console.log('hi')
            }

            return <Card 
                key={book.id} 
                cover={cover}
                price={book.userId} 
                title={book.title} 
                author='Author Author' 
                description={book.body}  
                onAddToCart={addToCart}/>
            })
    }

    return(
        <div className="books-list">
            {content}
        </div>
    );
}

export default CardsList;