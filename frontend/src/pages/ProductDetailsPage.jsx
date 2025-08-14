import { useState } from "react";
import denimjacket1 from "../assets/denimjacket1.avif";
import darkblueshirt from "../assets/darkblueshirt.jpg";

export default function ProductDetailsPage() {
  const product = {
    id: 2,
    name: "Slim Fit Jeans",
    type: "Jeans",
    price: 49.99,
    oldPrice: 59.99,
    discount: "15% OFF",
    images: [denimjacket1, darkblueshirt, denimjacket1],
    reviews: 18,
    rating: 4,
    badge: "",
  };

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [mainImage, setMainImage] = useState(product.images[0]);

  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#FF0000" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div>
        {/* Main Image */}
        <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
          <img
            src={mainImage}
            alt={product.name}
            className="rounded-xl object-cover max-h-[500px]"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4 justify-center">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(img)}
              className={`border-2 rounded-lg overflow-hidden ${
                mainImage === img ? "border-black" : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center mt-2 gap-2">
            <span className="text-2xl font-semibold text-red-600">
              RM{product.price}
            </span>
            <span className="line-through text-gray-400">
              RM{product.oldPrice}
            </span>
            {product.discount && (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm">
                {product.discount}
              </span>
            )}
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-gray-500 text-sm">
              ({product.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Size selection */}
        <div>
          <h2 className="text-lg font-medium mb-2">Select Size</h2>
          <div className="flex gap-3">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border rounded-lg ${
                  size === s
                    ? "bg-black text-white border-black"
                    : "border-gray-300 hover:border-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Colour selection */}
        <div>
          <h2 className="text-lg font-medium mb-2">Select Colour</h2>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                className={`w-10 h-10 rounded-full border-2 ${
                  color === c.name ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button className="mt-6 bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
