const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Define an async function called main to send queries to the database
async function main() {
    // write all Prisma Client queries here...
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })