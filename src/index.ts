import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //  const result = await prisma.user.create({
    //   data: {
    //       name: "Jhankar Mahbub",
    //       email: "jm@gmail.com"
    //   }
    //  })
    //  console.log(result);

//   const userData = await prisma.user.findMany();
//   console.log(userData);

  //   const findUserById = await prisma.user.findUnique({
  //     where: {
  //       id: 3,
  //     },
  //   });
  //   console.log(findUserById);

//   const updatedUser = await prisma.user.update({
//     where: {
//       id: 2,
//     },
//     data: {
//       email: "zerin@gmail.com",
//     },
//   });
//   console.log(updatedUser);

// const updateProfilePhoto = await prisma.user.updateMany({
//     where: {
//         profilePhoto: null
//     },
//     data: {
//         profilePhoto: "sample_photo.png"
//     }
// })
// console.log(updateProfilePhoto);

// const deleteUser = await prisma.user.deleteMany({
//     where: {
//         id:{
//             gt:0
//         }
//     }
// })
// console.log(deleteUser);

// console.log(await prisma.user.findMany());

























}

main();
