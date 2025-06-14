import BestSeller from '@/app/Components/BestSeller';
import FoodCardContainer from '@/app/Components/FoodContainer';
import HeroBanner from '@/app/Components/HeroBanner';

import SpecialOffer from '@/app/Components/SpecialOffer';
import React from 'react';

const Homepage = () => {
  return (
    <div >

      {/* Hero Section */}
      <HeroBanner
        title="WELCOME TO FRESHEAT"
        subtitle="CHICAGO DEEP PIZZA KING"
        description="Variety of flavors from American cuisine"
        buttonText="Order Now"
        backgroundImage='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        overlayOpacity={60}
        minHeight="70vh"   
      />

      {/* Popular Items */}
      <FoodCardContainer/>

      {/* Special Offers */}
      <SpecialOffer/>
        
      {/* Best Sellers */}
      <BestSeller/>
    </div>
  );
};

export default Homepage;