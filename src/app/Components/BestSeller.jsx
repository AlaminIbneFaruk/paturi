import SectionHeader from "./SectionHeader";

export default function BestSeller() {
    return (
      <div className="container mx-auto px-4 py-16">
        {/* Best Selling Dishes Section */}
        <SectionHeader
          title="Best Selling Dishes"
          subtitle="Our customers' favorites, just for you!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Chicken Fried Rice", price: "$14.99", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80" },
            { name: "Chinese Pasta", price: "$16.99", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80" },
            { name: "Chicken Pizza", price: "$18.99", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80" },
            { name: "Chicken Noodles", price: "$15.99", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80" },
            { name: "Grilled Chicken", price: "$17.99", image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" }
          ].map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="py-5"><img src={item.image} alt={item.name} className="h-48 object-cover" /></figure>
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="text-orange-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}