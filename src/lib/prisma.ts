import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV !== 'production') {
  const globalForPrisma = global as unknown as { prisma: PrismaClient }
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = prisma
  }
}
