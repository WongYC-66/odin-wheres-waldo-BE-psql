const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log("starting to populateDB ...")

    const user = await prisma.users.createMany({
        data:[
            {
                name : "admin1",
                time: 115.5
            },
            {
                name : "user1",
                time: 135.4
            },
        ]
    })



    console.log("finishing populateDB")
}






main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })