function ItemDisplay(props) {
    const showItem = (item) => {
        return (<div key={item.id}>
            <p>Id: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Proice: {item.price}</p>
            <p>Type: {item.type}</p>
            <p>Brand: {item.brand}</p>
        </div>);
    };
    return (
        <>
            {props.items.map(showItem)}
        </>
    )
}

export default ItemDisplay