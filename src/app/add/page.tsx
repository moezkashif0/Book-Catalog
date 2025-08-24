'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { AddBookForm } from '@/components/AddBookForm'

export default function AddBookPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600 font-medium">Loading...</div>
        </div>
      </div>
    )
  }

  if (!session) {
    // Redirect to signin page if not authenticated
    router.push('/auth/signin')
    return null
  }

  const handleBookAdded = (book: any) => {
    // Redirect to home page after successful book addition
    router.push('/')
  }

  const handleCancel = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Add New Book</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your favorite book with the BookCatalog community. 
            Add details about the book you love and help others discover great reads.
          </p>
        </div>

        <AddBookForm onBookAdded={handleBookAdded} onCancel={handleCancel} />
      </div>
    </div>
  )
} 