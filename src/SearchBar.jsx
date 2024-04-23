import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.updateSearchParams({ name: name, price: price, type: type, brand: brand });
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Search for an Item</h2>
            </div>
            <div className="row">
                    <div className="col mt-2">
                        <label htmlFor="name-field">Name: </label>
                        <input
                            id="name-field"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="price-field">Maxprice: </label>
                        <input
                            id="price-field"
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}>
                         </input>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="type-field">Type: </label>
                        <input
                            id="type-field"
                            type="text" value={type}
                            className="form-control"
                            onChange={(e) => setType(e.target.value)}>
                        </input>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="brand-field">Brand: </label>
                        <input
                            id="brand-field"
                            className="form-control"
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4" />
                        <button type="button" className="col-4 btn btn-dark" onClick={searchButtonPressed}> Search </button>    
                </div>
            </div>
    );
}

export default SearchBar;