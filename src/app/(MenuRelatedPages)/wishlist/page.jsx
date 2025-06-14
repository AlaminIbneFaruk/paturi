import HeroBanner from "@/app/Components/HeroBanner";

export default function Wishlist() {
  return (
    <div className="min-h-screen">
      <HeroBanner
        title="Your Wishlist"
        subtitle="Save your favorite items for later"
        description="From savory appetizers to mouthwatering desserts, we have it all."
        buttonText="Order Now"
        backgroundImage="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        minHeight="70vh"
        buttonColor="bg-orange-500"
        textAlign="text-center"
      />
      <p className="text-lg text-gray-600">Your wishlist is currently empty.</p>
    </div>
  );
}
