import { prisma } from "~/prisma";

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, "code");
  const posturl = await prisma.postUrl.findFirst({
    where: {
      code,
    },
  });
  return posturl;
});
