'use client'

import Link from 'next/link'

export function AddBookButton() {
  return (
    <Link
      href="/add"
      className="btn-primary group"
    >
      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Add New Book
    </Link>
  )
} 