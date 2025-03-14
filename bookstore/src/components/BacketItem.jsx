const BacketItem = (props) => {
    return (
        <div className="backet-item">
            <span>{props.title}</span>
            <button className="del-btn">Удалить</button>
        </div>
    );
}

export default BacketItem;