const Card = (props) => {
    return (
        <div className="card">
            <img className="cover" src={props.cover} alt="обложка книги" />
            <div className="price">{props.price} ₽</div>
            <div className="book-title">{props.title}</div>
            <div className="author">{props.author}</div>
            <div className="description">{props.description}</div>
            <button className="btn" onClick={props.onAddToCart}>Добавить в корзину</button>
        </div>
    );
}

export default Card;