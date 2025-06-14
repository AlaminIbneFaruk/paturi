// app/items/page.js
import FoodCardContainer from "@/app/Components/FoodContainer";
import HeroBanner from "@/app/Components/HeroBanner";
 

export default async function ItemsPage() {
  return (
    <div className="pb-12">
      <HeroBanner
        title="Delicious Items Await"
        subtitle="Explore our menu and find your favorite dish"
        description="From savory appetizers to mouthwatering desserts, we have it all."
        backgroundImage="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        minHeight="70vh"
        buttonColor="bg-orange-500"
        textAlign="text-center"
      />
      
      <FoodCardContainer />
    </div>
  );
}