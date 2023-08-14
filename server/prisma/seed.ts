import { PrismaClient } from '@prisma/client';

//Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  //create two dummy user
  const user1 = await prisma.user.upsert({
    where: { email: 'hoangcanada2002@gmail.com' },
    update: {},
    create: {
      name: 'hoang',
      hash: 'fef',
      phoneNumber: '8469854758',
      email: 'hoangcanada2002@gmail.com',
    },
    select: {
      email: true,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'hoangnhhe160531@fpt.edu.vn' },
    update: {},
    create: {
      name: 'hoangtuban',
      hash: 'fef',
      phoneNumber: '19874654454',
      email: 'hoangnhhe160531@fpt.edu.vn',
    },
    select: {
      email: true,
    },
  });

  console.log('upsert\n' + user1 + '\n' + user2);
}

//execute main function code
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
