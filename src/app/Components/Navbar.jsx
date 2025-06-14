"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const currentPath = usePathname();
  const isDashboard = currentPath.includes("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  if (isDashboard) return null;

  const links = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/items" },
    { label: "Checkout", path: "/checkout" },
    { label: "Wishlist", path: "/wishlist" },
    { label: "Cart", path: "/cart" },
  ];

  return (
    <div className="navbar bg-amber-100 text-gray-800 shadow-md px-6 py-3 font-semibold relative z-50">
      {/* Branding */}
      <div className="navbar-start">
        <Link
          href="/"
          className="text-xl text-amber-700 font-bold hover:text-orange-500 transition-all duration-300 flex items-center space-x-2"
        >
          {/* Logo */}
          <img src="/paturi.png" alt="Paturi Logo" className="h-12" />
          <h3 className="text-4xl text-amber-700 font-bold">Paturi</h3>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {links.map(({ label, path }) => (
            <li key={path}>
              {["Cart", "Wishlist"].includes(label) ? (
                <Link
                  href={path}
                  className="btn bg-orange-500 text-white hover:bg-orange-900 transition-all"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  href={path}
                  className="hover:text-orange-500 transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Login */}
      <div className="navbar-end hidden lg:flex">
        <Link href={`/login`} className="btn bg-orange-500 text-white">
          Login
        </Link>
        <Link href={`/register`} className="btn bg-orange-500 text-white">
          Register
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden ml-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost btn-circle text-orange-600"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-amber-50 shadow-md border-t py-4 flex flex-col items-center space-y-2 lg:hidden">
          {links.map(({ label, path }) => (
            <li key={path}>
              {["Cart", "Wishlist"].includes(label) ? (
                <Link
                  href={path}
                  className="btn btn-sm bg-orange-500 text-white hover:bg-orange-800 transition-all"
                >
                  {label}
                </Link>
              ) : (
                <Link
                  href={path}
                  className="hover:text-orange-500 transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}

          <li>
            <Link href={`/login`} className="btn bg-orange-500 text-white">
              Login
            </Link>
            <Link href={`/register`} className="btn bg-orange-500 text-white">
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
