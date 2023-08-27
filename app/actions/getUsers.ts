import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getUser = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email, //find all of users (eliminate current user)
        },
      },
    });
    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUser;
