import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNames = {
  items: 'items',
  chefs: 'chefs',
  reviews: 'reviews',
  orders: 'orders',
  users: 'users',
  blogs: 'blogs',
  categories: 'categories',
  carts: 'carts',
};

let client;
let clientPromise;

const uri = process.env.NEXT_MONGODB_URI;
if (!uri) throw new Error('Missing NEXT_MONGODB_URI');

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export default async function DBConnect(collectionName) {
  const client = await clientPromise;
  return client.db(process.env.NEXT_MONGODB_DB).collection(collectionName);
}