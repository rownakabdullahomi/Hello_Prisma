import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //    const result = await prisma.user.create({
  //     data: {
  //         name: "Jhankar Mahbub",
  //         email: "jm@gmail.com"
  //     }
  //    })
  //    console.log(result);

  // const userData = await prisma.user.findMany({
  //     where: {
  //         name: "Rownak Abdullah"
  //     }
  // });
  // console.log(userData);

  const findUserById = await prisma.user.findUnique({
    where: {
      id: 3,
    },
  });
  console.log(findUserById);














  
}

main();
