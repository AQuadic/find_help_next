import React from "react";

function ItemCategories({ title, image, link }) {
  return (
    <div class="part">
      <img src={`/images/categ${image}.webp`} alt="Categories" />
      <h3>{title}</h3>
    </div>
  );
}

export default ItemCategories;
