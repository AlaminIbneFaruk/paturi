'use client'

import { FaSort } from 'react-icons/fa'

export default function SortComponent({ sortBy, setSortBy }) {
  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="appearance-none pl-4 pr-10 py-2 w-full border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="name">Sort by Name (A-Z)</option>
        <option value="price">Sort by Price (Low to High)</option>
        <option value="price-desc">Sort by Price (High to Low)</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaSort className="text-gray-400" />
      </div>
    </div>
  )
}