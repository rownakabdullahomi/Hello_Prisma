import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
//   const insertUsers = await prisma.user.createMany({
//     data: [
//       {
//         name: "Kamal Hasan",
//         email: "kh@gmail.com",
//       },
//       {
//         name: "Zahid Hasan",
//         email: "zh@gmail.com",
//       },
//       {
//         name: "Mehedi Hasan",
//         email: "mh@gmail.com",
//       },
//       {
//         name: "Toufiq Hasan",
//         email: "th@gmail.com",
//       },
//       {
//         name: "Saif Hasan",
//         email: "sh@gmail.com",
//       },
//     ],
//   });

//   console.log(insertUsers);

  console.log(await prisma.user.findMany({
    where:{
        name: "Saif Hasan"
    },
    orderBy: {
        id: "desc"
    }
  }));
























  
}

others();
