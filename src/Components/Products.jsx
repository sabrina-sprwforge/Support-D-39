import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Pages/Shared/Sidebar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const maxPage = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => {
    if (currentPage < maxPage) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (!existingProduct) {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
    navigate("/cart");
  };

  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      <div className="w-5/6">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {currentData().map((product) => (
              <div
                key={product.id}
                className="bg-slate-100 flex flex-col justify-center items-center gap-6 m-4 rounded"
              >
                <div className="h-[236px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[236px] object-cover"
                  />
                </div>
                <div className="px-8 pt-4">
                  <h3 className="text-xl text-black font-bold">
                    {product.name}
                  </h3>
                  <div className="flex justify-between mt-2">
                    <p className="text-lg text-black font-bold">
                      {product.price}
                    </p>
                    <p className="line-through text-lg">
                      {product.previousPrice}
                    </p>
                    <p className="text-lg text-red-600 font-bold">
                      {product.offer}
                    </p>
                  </div>
                  <p className="text-sm">
                    {product.description.slice(0, 77)}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-gray-950 hover:bg-sky-950 text-white py-3 px-7 mb-6 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center my-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`mx-2 px-4 py-2 bg-gray-950 rounded ${
                currentPage === 1
                  ? "opacity-50 "
                  : "hover:bg-sky-950"
              }`}
            >
              Previous
            </button>
            <span className="mx-4 text-black">
              Page {currentPage} of {maxPage}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === maxPage}
              className={`mx-2 px-4 py-2 bg-gray-950 rounded ${
                currentPage === maxPage
                  ? "opacity-50 "
                  : "hover:bg-sky-950"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
