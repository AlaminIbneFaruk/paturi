import React from 'react';
import SectionHeader from './SectionHeader';
import DBConnect, { collectionNames } from '@/lib/dbConnect';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const getFoodItems = async () => {
  const db = await DBConnect(collectionNames.items);
  const items = await db.find({}).toArray();
  return items;
};
const FoodCardContainer = async () => {
  const foodItems = await getFoodItems();

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Popular Food Items"
        subtitle="Discover our best-selling dishes"
        titleClassName="text-orange-800 font-bold"
        subtitleClassName="text-orange-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {foodItems.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure>
              <Image 
                src={item.image} 
                alt={item.alt} 
                className="h-48 w-full object-cover"
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="text-orange-600 font-bold">{item.price}</p>
              <div className="card-actions justify-end">
                <Link href={`/items/${item._id}`} className="btn btn-primary btn-sm bg-orange-600 border-none">
                  View Details
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCardContainer;