import React from "react";
import { useState } from "react"

function Item({name, category, id, setCart}) {
  const [inCart, setInCart] = useState(false);
  
  const item = {name, category, id}
  const liClass = !inCart ? "" : "in-cart"
  const buttonText = !inCart ? "Add To Cart" : "Remove From Cart"

  const handleClick = (e) => {
    if (!inCart) {
      setCart(currentCart => [...currentCart, item])
    } else {
      setCart(currentCart => currentCart.filter(item => item.id !== id))
    }
    setInCart(currentValue => !currentValue)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
