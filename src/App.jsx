import "./App.css";
import ItemDisplay from "./ItemsDisplay";
import SearchBar from "./SearchBar";
import AddItem from "./addItem";
import { useState } from "react";
import styled from "styled-components";


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemDisplay items={data["items"]}  />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;