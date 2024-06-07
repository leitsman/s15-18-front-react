"use server";

import { cookies } from "next/headers";

export async function getUserCredentials() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  if (userId) {
    return { userId };
  } else {
    return null;
  }
}
