import darkblueshirt from "../assets/darkblueshirt.jpg";
import denimjacket1 from "../assets/denimjacket1.avif";
import greenshirt from "../assets/greenshirt.jpg";

export const products = [
  { id: 1, name: "Casual T-Shirt", type: "T-Shirt", price: 29.99, oldPrice: 39.99, discount: "25% OFF", image: darkblueshirt, reviews: 42, rating: 4.5, badge: "Bestseller" },
  { id: 2, name: "Slim Fit Jeans", type: "Jeans", price: 49.99, oldPrice: 59.99, discount: "15% OFF", image: denimjacket1, reviews: 18, rating: 4, badge: "" },
  { id: 3, name: "Leather Jacket", type: "Jacket", price: 119.99, oldPrice: 149.99, discount: "20% OFF", image: greenshirt, reviews: 9, rating: 5, badge: "Limited" },
];
