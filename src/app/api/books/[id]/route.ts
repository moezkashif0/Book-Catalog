import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
    }

    const bookId = params.id

    // First, check if the book exists and belongs to the authenticated user
    const book = await prisma.book.findFirst({
      where: {
        id: bookId,
        user: {
          email: session.user.email
        }
      },
      include: {
        user: {
          select: {
            email: true
          }
        }
      }
    })

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found or you do not have permission to delete it' },
        { status: 404 }
      )
    }

    // Verify the book belongs to the authenticated user
    if (book.user.email !== session.user.email) {
      return NextResponse.json(
        { error: 'You can only delete your own books' },
        { status: 403 }
      )
    }

    // Delete the book
    await prisma.book.delete({
      where: {
        id: bookId,
      },
    })

    return NextResponse.json({ message: 'Book deleted successfully' })
  } catch (error) {
    console.error('Error deleting book:', error)
    return NextResponse.json(
      { error: 'Failed to delete book' },
      { status: 500 }
    )
  }
} 