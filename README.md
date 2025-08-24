# Book Catalog App

A full-stack book catalog application built with Next.js, TypeScript, PostgreSQL, Prisma ORM, and NextAuth.js for user authentication.

## Features

- **User Authentication**: Sign up/sign in with email/password or Google OAuth
- **Book Management**: Add, view, and delete books
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Dynamic book list with instant feedback
- **User Authorization**: Users can only delete their own books

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Backend**: Next.js API Routes
- **Authentication**: NextAuth.js (Email/Password, Google OAuth)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon, Supabase, ElephantSQL, or local)
- Google OAuth credentials (for Google sign-in)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd book-catalog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bookcatalog"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 4. Set up the database

```bash
# Generate Prisma client
npm run db:generate

# Push the schema to your database
npm run db:push
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Routes

### Books
- `GET /api/books` - Fetch all books
- `POST /api/books` - Add a new book (requires authentication)
- `DELETE /api/books/:id` - Delete a book (requires authentication, owner only)

### Authentication
- `POST /api/auth/signup` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js endpoints

## Pages

- **Home (`/`)**: Display all books with delete functionality
- **Add Book (`/add`)**: Form to add new books (requires authentication)
- **Sign In (`/auth/signin`)**: Authentication page with sign up/sign in options

## Database Schema

### User
- `id`: Unique identifier
- `name`: User's full name
- `email`: User's email address
- `password`: Hashed password (for credentials provider)
- `image`: Profile image URL
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp

### Book
- `id`: Unique identifier
- `title`: Book title
- `author`: Book author
- `genre`: Book genre
- `userId`: Foreign key to User
- `createdAt`: Book creation timestamp
- `updatedAt`: Last update timestamp

## Deployment

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)
3. Deploy

### 3. Update Google OAuth

Update your Google OAuth credentials with the production redirect URI:
`https://your-domain.vercel.app/api/auth/callback/google`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js | Yes |
| `NEXTAUTH_URL` | Your application URL | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | No (if not using Google) |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | No (if not using Google) |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 