"use server";

import { getUserCredentials } from "./getUserToken";

export async function isAuthorized() {
  const res = await getUserCredentials();
  if (!res.token) return false;
  return true;
}
