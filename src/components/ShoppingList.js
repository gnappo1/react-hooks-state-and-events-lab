import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")

  
  const handleChange = (e) => {
    // debugger
    // what was typed? e.target.value
    const newState = e.target.value
    // say "hey state, you should now be what was typed"
    setSelectedCategory(newState)
  }
  
  // const filteredItems = items.filter(item => {
  //   if (selectedCategory === "All") {
  //     return item
  //   }
  //   return item.category === selectedCategory
  // })

  // const filteredItems = items.filter(item => selectedCategory === "All" ? item : item.category === selectedCategory)

  const filteredItems = items.filter(item => item.category === selectedCategory)

  const finalItems = selectedCategory === "All" ? items : filteredItems
  
  const itemComponentsList = finalItems.map((item) => (
    <Item key={item.id} setCart={setCart} {...item} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemComponentsList}
      </ul>
    </div>
  );
}

export default ShoppingList;
