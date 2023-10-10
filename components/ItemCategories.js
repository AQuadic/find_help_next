import Link from "next/link";
import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
function ItemCategories({ title, image, link, id }) {
  return (
    <Link href={`/categoriesDetails/${id}`} className="part" key={id}>
      <img src={image} alt="Categories" />
      <h3>
        <ReactReadMoreReadLess
          charLimit={10}
          readMoreText={false}
          readLessText={false}
        >
          {title}
        </ReactReadMoreReadLess>
      </h3>
    </Link>
  );
}

export default ItemCategories;
