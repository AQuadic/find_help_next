import Link from "next/link";
import React from "react";

function ItemCategories({ title, image, link,id }) {
  return (
    <Link href={`/categoriesDetails/${id}`} className= "part" key={id}>
      <img src={image} alt="Categories" />
      <h3>{title}</h3>
    </Link>
  );
}

export default ItemCategories;
