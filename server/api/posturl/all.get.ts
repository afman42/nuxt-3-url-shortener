import { prisma } from "~/prisma";

export default defineEventHandler(async (_) => {
  const posturl = await prisma.postUrl.findMany();
  return posturl;
});
