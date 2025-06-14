"use client"

import { registerUser } from "@/app/actions/auth/RegisterUser";
import Link from "next/link";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const RegisterForm = () => {
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    await registerUser({name,password,email});
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="btn w-full mb-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition duration-200"
        >
          Register
        </button>
        <Link
          href={`/login`}
          className="btn w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition duration-200"
        >
          Login
        </Link>
        <hr />
        <div className="flex gap-20 justify-evenly m-4">
            <button onClick={()=>{console.log("Clicked Google")}} className="btn btn-circle bg-orange-500">
                <FaGoogle/>
            </button>
            <button onClick={()=>{console.log("Clicked LinkedIn")}} className="btn btn-circle bg-orange-500 ">
                <FaLinkedin/>
            </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
