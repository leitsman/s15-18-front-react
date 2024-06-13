"use server";

import { cookies } from "next/headers";

export async function getUserToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    return { token };
  } else {
    return null;
  }
}
