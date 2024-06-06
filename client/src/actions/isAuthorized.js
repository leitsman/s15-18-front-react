'use server'

import { getUserCredentials } from "./getUserCredentials"

export async function isAuthorized() {
  const res = await getUserCredentials()
  if (!res.userId) return false
  return true
}