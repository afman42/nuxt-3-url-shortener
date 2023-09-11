import { prisma } from "~/prisma";
import { makeid } from "~/utils/makeId";

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event);
  if (["", "http", "https"].includes(url)) {
    throw createError({
      statusCode: 422,
      statusMessage: "Url not must empty",
    });
  }
  const posturl = await prisma.postUrl.create({
    data: {
      url,
      createdAt: new Date(),
      code: makeid(5),
    },
  });
  return posturl;
});
