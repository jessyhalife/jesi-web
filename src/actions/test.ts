"use server";
import { hash } from "argon2";

export const hashPassword = async (
  _prev: { type: string },
  formData: FormData
): Promise<{
  type: string;
}> => {
  const value = formData.get("password");

  const hashed = await hash("password");
  console.log({ value, hashed });
  return {
    type: "idle",
  };
};
