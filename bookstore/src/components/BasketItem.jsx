import { removeBook } from "../store/slices/basketSlice";
import { useDispatch } from "react-redux";
 import { useSelector} from "react-redux";

const BasketItem = (props) => {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);
 
    return (
        <div className="backet-item">
            <span>{props.title}</span>
            <button className="del-btn" onClick={() => {
                dispatch(removeBook(props.book));
            }}>Удалить</button>
        </div>
    );
}

export default BasketItem;