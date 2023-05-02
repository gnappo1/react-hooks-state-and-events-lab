import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = (e) => {
    setInCart(currentVal => !currentVal)
    // e.target.parentNode.classList.toggle('in-cart')
  }
  
  const conditionalButtonLogic = inCart ? "Remove From Cart" : 'Add to Cart'
  const conditionalLiLogic = inCart ? "in-cart" : "not-in-cart"
  const conditionalStyleLogic = inCart ? "remove" : "add"

  return (
    <li className={conditionalLiLogic}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={conditionalStyleLogic}>{conditionalButtonLogic}</button>
    </li>
  );
}

export default Item;