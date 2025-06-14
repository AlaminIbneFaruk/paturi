'use client'

import { useState } from 'react'
import { FaFilter, FaTimes } from 'react-icons/fa'

export default function FilterComponent({ 
  categories, 
  priceRanges, 
  filters, 
  setFilters, 
  resetFilters 
}) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div>
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition"
      >
        <FaFilter /> Filters
      </button>

      {showFilters && (
        <div className="absolute mt-2 right-0 md:left-0 z-10 w-72 p-4 bg-white rounded-lg shadow-xl border">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Filters</h3>
            <button 
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
          </div>

          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Prices</option>
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                resetFilters()
                setShowFilters(false)
              }}
              className="w-full mt-2 px-4 py-2 text-sm text-orange-600 hover:text-orange-800 border border-orange-200 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}