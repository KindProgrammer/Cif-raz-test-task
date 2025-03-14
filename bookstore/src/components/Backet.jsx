import { useState } from "react"
import BacketItem from "./BacketItem.jsx";

const Backet = () => {
    const [backet, setBacket] = useState([]);

    let content;

    if (backet.length === 0) {
        content = <p>Ваша корзина пуста</p>
    } else {
        content = backet.map((item) => {
            return <BacketItem title={item.title} />
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