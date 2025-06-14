import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const pages = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/items" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Cart", href: "/cart" },
    { label: "Checkout", href: "/checkout" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Chefs", href: "/chef" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ];

  return (
    <>
      {/* PRODUCTION FOOTER */}
      <footer className="bg-amber-100 text-amber-800 border-t border-amber-200 pt-10 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand */}
          <div className="cols-span-1 lg:col-span-2">
            <h2 className="text-5xl font-bold text-amber-700 mb-2">Paturi</h2>
            <p className="mb-4">
              Taste the best. Experience the warmth. Crafted for true food lovers.
            </p>
            <div className="flex space-x-4 text-orange-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          {/* Site Links */}
          <div className="flex flex-col space-y-4 items-center justify-center">
            <h3 className="font-semibold mb-2 text-amber-700">Quick Links</h3>
            <ul className="space-y-1">
              {pages.slice(0, 6).map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-orange-500 transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="flex flex-col space-y-4 items-center">
            <h3 className="font-semibold mb-2 text-amber-700">More Links</h3>
            <ul className="space-y-1">
              {pages.slice(6).map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-orange-500 transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-amber-200 pt-4 text-center text-xs text-amber-600">
          &copy; 2025 Paturi. All rights reserved.
        </div>
      </footer>

    </>
  );
}
