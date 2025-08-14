import { useState } from "react";
import darkblueshirt from "../assets/darkblueshirt.jpg";
import denimjacket1 from "../assets/denimjacket1.avif";

export default function CartPage() {
  const discountRate = 0.1; // 10% discount

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Annabeth Pink Lily Bouquet",
      price: 159.0,
      image: darkblueshirt,
      quantity: 1,
      gender: "Unisex",
      material: "Cotton",
      category: "Shirt",
      discountPercentage: 10,
    },
    {
      id: 2,
      name: "Marilyn Pink Carnation Bouquet",
      price: 135.0,
      image: denimjacket1,
      quantity: 1,
      gender: "Female",
      material: "Wool",
      category: "Sweater",
    discountPercentage: 10

    },
  ]);

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc +
      (item.price - item.price * (item.discountPercentage / 100)) * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Cart</h1>

      {/* Table Header */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b pb-2 font-medium text-gray-500">
        <span>Product</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      {/* Cart Items */}
      {cart.map((item) => {
        const discountedPrice = item.price - item.price * (item.discountPercentage / 100);
        return (
          <div
            key={item.id}
            className="grid grid-cols-[1fr_auto_auto] gap-4 py-6 border-b items-center"
          >
            {/* Product Info */}
            <div className="flex items-start gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-md"
              />
              <div>
                <h2 className="font-medium">{item.name}</h2>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 line-through">
                    RM{item.price.toFixed(2)}
                  </p>
                  <p className="text-green-600 font-medium">
                    RM{discountedPrice.toFixed(2)}
                  </p>
                  <span className="text-sm text-red-500">
                    (-10%)
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {item.gender} / {item.material} / {item.category}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-2 py-1 border rounded"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>

            {/* Total */}
            <div className="flex flex-col items-end">
              <p className="font-medium">
                RM{(discountedPrice * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-sm text-gray-500 underline mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}

      {/* Checkout Section */}
      <div className="mt-8 flex flex-col items-end">
        <p className="text-lg font-medium">
          Total:{" "}
          <span className="text-gray-800">
            RM{totalPrice.toFixed(2)}
          </span>
        </p>
        <p className="text-sm text-gray-500">
          Shipping calculated at checkout
        </p>
        <button className="mt-3 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
