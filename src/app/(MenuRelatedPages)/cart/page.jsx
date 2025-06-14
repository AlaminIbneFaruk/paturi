// app/cart/page.js
"use client";

import HeroBanner from "@/app/Components/HeroBanner";
import { useRouter } from "next/navigation";



export default function CartPage() {
  const Router=useRouter();

  const handleProceedToCheckout = () => {
    // Create a URLSearchParams object with cart data
    const params = new URLSearchParams();

    // Add cart items as JSON string
    params.append("cart", JSON.stringify(cart));

    // Add total price
    params.append("total", totalPrice.toString());

    // Add total items count
    params.append("totalItems", totalItems.toString());

    // Redirect to checkout page with cart data
    Router.push(`/checkout`);
  };
  return (
    <div>
      <HeroBanner
        title="Cart"
        subtitle="Complete your purchase"
        description="Review your order and proceed to payment."
        backgroundImage="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        buttonColor="bg-orange-500"
        textAlign="text-center"
      />

      <div className="container mx-auto p-4 mt-8">

      </div>
    </div>
  );
}
