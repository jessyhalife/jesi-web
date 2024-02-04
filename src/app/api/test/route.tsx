export const GET = async (req: Request) => {
  const argon2 = require("argon2");
  const hashed = await argon2.hash("password");
  return Response.json({
    message: "hola",
    hashed,
  });
};
