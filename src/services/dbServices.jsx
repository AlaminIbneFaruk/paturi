// services/dbService.js
import DBConnect, { collectionNames } from "@/lib/dbConnect";

export const getAllItems = async () => {
  const collection = await DBConnect(collectionNames.items);
  const items = await collection.find().sort({ createdAt: -1 }).toArray();
  return items.map((item) => ({
    ...item,
    _id: item._id.toString(),
    createdAt: item.createdAt?.toISOString(),
    updatedAt: item.updatedAt?.toISOString(),
  }));
};

export const getItemById = async (id) => {
  const collection = await DBConnect(collectionNames.items);
  const item = await collection.findOne({ _id: new ObjectId(id) });
  return item
    ? {
        ...item,
        _id: item._id.toString(),
        createdAt: item.createdAt?.toISOString(),
        updatedAt: item.updatedAt?.toISOString(),
      }
    : null;
};

export const createItem = async (itemData) => {
  const collection = await DBConnect(collectionNames.items);
  const now = new Date();
  const result = await collection.insertOne({
    ...itemData,
    createdAt: now,
    updatedAt: now,
  });
  return {
    ...itemData,
    _id: result.insertedId.toString(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
};

export const updateItem = async (id, updateData) => {
  const collection = await DBConnect(collectionNames.items);
  const now = new Date();
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...updateData, updatedAt: now } }
  );
  return getItemById(id);
};

export const deleteItem = async (id) => {
  const collection = await DBConnect(collectionNames.items);
  await collection.deleteOne({ _id: new ObjectId(id) });
};

// Similar functions for other collections (chefs, reviews, etc.)
export const getCart = async (id) => {
  const collection = await DBConnect(collectionNames.carts);
  const carts = await collection.find().sort({ createdAt: -1 }).toArray();
  return carts.map((cart) => ({
    ...cart,
    _id: cart._id.toString(),
    createdAt: cart.createdAt?.toISOString(),
    updatedAt: cart.updatedAt?.toISOString(),
  }));
};

export const addToCart = async (itemData) => {
  if (!itemData?.itemId || !itemData?.quantity || !itemData?.userId) {
    throw new Error("Missing required cart item fields.");
  }

  const collection = await DBConnect(collectionNames.cart); // make sure this points to the cart collection
  const now = new Date();

  const result = await collection.insertOne({
    ...itemData,
    createdAt: now,
    updatedAt: now,
  });

  return {
    ...itemData,
    _id: result.insertedId.toString(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
};

// Fetch all wishlist items (optionally filter by userId)
export const getWishlist = async (userId) => {
  const collection = await DBConnect(collectionNames.wishlists); // Ensure this collection name exists

  // Optional: Only return wishlist items for a specific user
  const query = userId ? { userId } : {};

  const wishlists = await collection.find(query).sort({ createdAt: -1 }).toArray();

  return wishlists.map((wishlist) => ({
    ...wishlist,
    _id: wishlist._id.toString(),
    createdAt: wishlist.createdAt?.toISOString(),
    updatedAt: wishlist.updatedAt?.toISOString(),
  }));
};

// Add a new item to the wishlist
export const addToWishlist = async (itemData) => {
  if (!itemData?.itemId || !itemData?.userId) {
    throw new Error("Missing required wishlist item fields (itemId, userId).");
  }

  const collection = await DBConnect(collectionNames.wishlists); // Ensure consistent naming
  const now = new Date();

  const result = await collection.insertOne({
    ...itemData,
    createdAt: now,
    updatedAt: now,
  });

  return {
    ...itemData,
    _id: result.insertedId.toString(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
};
