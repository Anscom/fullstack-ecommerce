import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../stores/products";
import PriceRangeFilter from "../component/PriceRangeFilter";

const types = ["T-Shirt", "Jeans", "Jacket"];

const ProductPage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200); // adjust based on your products

  const filteredProducts = products.filter((p) => {
    const matchesType = selectedType ? p.type === selectedType : true;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Mobile filter */}
      <div className="block md:hidden mb-4 space-y-2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded px-3 py-2 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full border rounded px-3 py-2 text-sm"
          value={selectedType || ""}
          onChange={(e) => setSelectedType(e.target.value || null)}
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {/* Price filter */}
        <PriceRangeFilter
          min={0}
          max={304}
          onChange={([minPrice, maxPrice]) => {
            setMinPrice(minPrice);
            setMaxPrice(maxPrice);
          }}
          />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar (Desktop) */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow p-4 hidden md:block space-y-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded px-3 py-2 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h2 className="text-lg font-semibold">Type</h2>
          <ul>
            <li key="no-filter">
              <button
                className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-100 ${
                  selectedType === null ? "bg-purple-100 font-semibold" : ""
                }`}
                onClick={() => setSelectedType(null)}
              >
                All
              </button>
            </li>
            {types.map((type) => (
              <li key={type}>
                <button
                  className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-100 ${
                    selectedType === type ? "bg-purple-100 font-semibold" : ""
                  }`}
                  onClick={() =>
                    setSelectedType(selectedType === type ? null : type)
                  }
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>

          {/* Price Filter */}
          <h2 className="text-lg font-semibold mt-4">Price Range</h2>
          <PriceRangeFilter
          min={0}
          max={304}
          onChange={([minPrice, maxPrice]) => {
            setMinPrice(minPrice);
            setMaxPrice(maxPrice);
          }}
          />
          
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
            <p className="text-gray-600">{filteredProducts.length} products</p>
            <select className="border rounded px-3 py-2 text-sm w-full sm:w-auto">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-t-lg w-full h-64 sm:h-72 md:h-80 object-cover"
                    />
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {product.discount}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    {product.badge && (
                      <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded mb-2 inline-block">
                        {product.badge}
                      </span>
                    )}
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <div className="flex items-center mt-1 mb-2">
                      <span className="text-yellow-500 text-sm mr-1">★</span>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} Reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">
                        RM{product.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        RM{product.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
