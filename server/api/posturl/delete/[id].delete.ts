import { prisma } from "~/prisma";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id") as string;
  const posturl = await prisma.postUrl.delete({
    where: {
      id: parseInt(id),
    },
  });
  return posturl;
});
