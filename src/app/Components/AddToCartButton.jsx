// components/AddToCartButton.js
"use client";

import { useCart } from "@/context/CartContext";
import { FaCartPlus } from "react-icons/fa";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      }
      className="btn bg-orange-500 hover:bg-orange-600 text-white flex-1"
    >
      <FaCartPlus className="text-xl" />
      Add to Cart
    </button>
  );
}
