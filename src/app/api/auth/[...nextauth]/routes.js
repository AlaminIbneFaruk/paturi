import { handlers } from '@/lib/auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import bcrypt from 'bcryptjs';
import DBConnect, { collectionNames } from './DBConnect';

// Create a client promise for MongoDBAdapter
let clientPromise;

async function getClientPromise() {
  if (!clientPromise) {
    const collection = await DBConnect(collectionNames.users);
    clientPromise = collection.db().client.connect();
  }
  return clientPromise;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(getClientPromise()),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const usersCollection = await DBConnect(collectionNames.users);
        const user = await usersCollection.findOne({ email: credentials.email });

        if (!user) throw new Error('No user found');
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error('Invalid password');

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
  pages: { signIn: '/login' },
});

export const { GET, POST } = handlers;