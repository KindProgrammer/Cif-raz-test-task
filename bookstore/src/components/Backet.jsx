import { useSelector } from 'react-redux';
import BasketItem from "./BasketItem.jsx";

const Backet = () => {
    const basket = useSelector((state) => state.basket);

    let content;

    if (Object.keys(basket).length === 0) {
        content = <p>Ваша корзина пуста</p>
    } else {
        const basketKeys = Object.keys(basket)
        content = basketKeys.map((item) => {
            return <BasketItem key={basket[item].id} title={basket[item].title} book={basket[item]} />
        })
    }

    return (
        <div className="backet">
            <h3>Корзина</h3>
            <hr className="green" />
            {content}
        </div>
    );
}

export default Backet;