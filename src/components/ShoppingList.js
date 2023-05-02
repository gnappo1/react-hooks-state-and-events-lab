import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [userSelected, setUserSelected] = useState("All")

  const selectCategory = (e) => {
    const value = e.target.value
    setUserSelected(value)
  }

  const filteredItems = items.filter(item => {
    // if (userSelected === "All") {
    //   return true
    // } else {
    //   return item.category === userSelected
    // }

    // return userSelected === "All" ? true : item.category === userSelected

    return userSelected === "All" || item.category === userSelected
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;