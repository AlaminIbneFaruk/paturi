"use server";
import bcrypt from "bcrypt";
import DBConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {

  const userCollection = await DBConnect(collectionNames.users);
//   // validation
  if(!payload.email||!payload.password||!payload.name) return {success:false};
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPass=await bcrypt.hash(payload.password,10)
    payload.password=hashedPass
    const result = await userCollection.insertOne(payload);
    const {acknowledged}=result;
    return {acknowledged};
  }
  return {success:false};
};
