
import HeroBanner from "@/app/Components/HeroBanner";
import SectionHeader from "@/app/Components/SectionHeader";
import DBConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default async function ItemsPage({ params }) {
  const { id } = params;
  
  try {
    const itemsCollection = await DBConnect(collectionNames.items);
    const item = await itemsCollection.findOne({ _id: new ObjectId(id) });

    if (!item) {
      return (
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-12">
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Error! Item not found.</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Convert ObjectId to string for serialization
    const serializedItem = {
      ...item,
      _id: item._id.toString()
    };

    return (
      <div className="min-h-screen">
        <HeroBanner
          title={`${serializedItem?.name || 'Item Details'}`}
          subtitle={serializedItem?.shortDescription || "Premium quality item"}
          description={serializedItem?.description || "Discover the exceptional features of this product"}
          buttonText="Add to Cart"
          backgroundImage={serializedItem?.image || "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
          minHeight="70vh"
          buttonColor="bg-orange-500"
          textAlign="text-center"
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="card bg-base-100 shadow-xl">
                <figure className="relative h-[28rem] p-10">
                  <Image
                    src={serializedItem.image}
                    alt={serializedItem.alt || serializedItem.name}
                    className="object-cover object-bottom"
                    fill
                    sizes="(max-width: 768px) 50vw"
                    priority
                  />
                </figure>
                <div className="card-body p-4">
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3].map((thumb) => (
                      <div key={thumb} className="w-16 h-16 border rounded-lg overflow-hidden">
                        <Image
                          src={serializedItem.image}
                          alt={`Thumbnail ${thumb}`}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="lg:w-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h1 className="card-title text-3xl font-bold">{serializedItem.name}</h1>
                  
                  <div className="badge badge-primary badge-lg mt-2">
                    {serializedItem.category || "Featured"}
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-orange-500">${serializedItem.price}</span>
                    {serializedItem.originalPrice && (
                      <span className="text-lg ml-2 line-through text-gray-500">
                        ${serializedItem.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="divider"></div>
                  
                  <p className="text-lg">{serializedItem.description}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 w-32">Availability:</span>
                      <span className="badge badge-success">In Stock</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 w-32">Brand:</span>
                      <span>{serializedItem.brand || "Premium Brand"}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 w-32">Rating:</span>
                      <div className="rating rating-sm">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <input
                            key={star}
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked={star === 4}
                            readOnly
                          />
                        ))}
                      </div>
                      <span className="ml-2">(24 reviews)</span>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div className="card-actions">
                    <div className="flex items-center gap-4 w-full">

                      <button className="btn bg-orange-500 hover:bg-orange-600 text-white flex-1">
                        <FaCartPlus className="text-xl"/>
                        Add To Cart
                      </button>
                      <button className="btn btn-ghost btn-circle">
                        <FaHeart className="text-xl"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching item:", error);
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Error loading item details. Please try again later.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}