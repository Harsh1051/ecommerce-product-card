import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ProductCard from "./ProductCard";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const result = await response.json();

      // Add inStock randomly (true for ~70% of products)
      const enriched = result.map(p => ({ ...p, inStock: Math.random() > 0.3 }));

      setData(enriched);
      setFilter(enriched);
      setLoading(false);
    };

    getProducts();
  }, []);

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {Array(6).fill().map((_, i) => (
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={i}>
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>

      <div className="buttons text-center py-3">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>

      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          filter.map((product) => (
            <div className="col-md-4 col-sm-6 col-10 mb-4" key={product.id}>
              <ProductCard product={product} addProduct={addProduct} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
