'use client'

interface Book {
  id: string
  title: string
  author: string
  genre: string
  createdAt: string
  user: {
    name: string | null
    email: string | null
  }
}

interface BookCardProps {
  book: Book
  onDelete: () => void
  canDelete: boolean
}

const getGenreColor = (genre: string) => {
  const colors: { [key: string]: string } = {
    'Fiction': 'bg-blue-100 text-blue-800',
    'Non-Fiction': 'bg-green-100 text-green-800',
    'Mystery': 'bg-purple-100 text-purple-800',
    'Romance': 'bg-pink-100 text-pink-800',
    'Science Fiction': 'bg-indigo-100 text-indigo-800',
    'Fantasy': 'bg-yellow-100 text-yellow-800',
    'Biography': 'bg-gray-100 text-gray-800',
    'History': 'bg-red-100 text-red-800',
    'Self-Help': 'bg-emerald-100 text-emerald-800',
    'Business': 'bg-slate-100 text-slate-800',
    'Technology': 'bg-cyan-100 text-cyan-800',
    'Philosophy': 'bg-orange-100 text-orange-800',
    'Poetry': 'bg-violet-100 text-violet-800',
    'Drama': 'bg-amber-100 text-amber-800',
    'Comedy': 'bg-lime-100 text-lime-800',
    'Horror': 'bg-rose-100 text-rose-800',
    'Adventure': 'bg-teal-100 text-teal-800',
    'Thriller': 'bg-fuchsia-100 text-fuchsia-800',
    'Classic': 'bg-stone-100 text-stone-800',
    'Contemporary': 'bg-sky-100 text-sky-800'
  }
  
  return colors[genre] || 'bg-gray-100 text-gray-800'
}

export function BookCard({ book, onDelete, canDelete }: BookCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="card p-6 hover:shadow-xl transition-all duration-300 group">
      {/* Book Cover Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      {/* Genre Badge */}
      <div className="mb-3">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getGenreColor(book.genre)}`}>
          {book.genre}
        </span>
      </div>

      {/* Book Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
        {book.title}
      </h3>

      {/* Author */}
      <p className="text-gray-600 mb-3 flex items-center">
        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        {book.author}
      </p>

      {/* Date Added */}
      <p className="text-gray-500 text-sm mb-4 flex items-center">
        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Added {formatDate(book.createdAt)}
      </p>

      {/* User Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">
            {book.user.name || book.user.email?.split('@')[0] || 'Anonymous'}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {canDelete && (
          <button
            onClick={onDelete}
            className="btn-danger w-full"
            title="Delete this book"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        )}
      </div>
    </div>
  )
} 