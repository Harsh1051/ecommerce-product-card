import React from "react";

const ProductCard = ({ product, addProduct }) => {
  const { image, title, price, inStock } = product;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top img-fluid"
        alt={title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fw-bold text-dark">₹{price}</p>

        {/* Optional: Add variant dropdown if needed in future */}

        <button
          className="btn btn-dark mt-auto"
          onClick={() => inStock && addProduct(product)}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
