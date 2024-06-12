'use server'

import { SERVER_ROUTES } from "@/constants/server.routes";

const { getUserToken } = require("./getUserToken");

export async function getCurrentUserInfo() {
  const BASE_URL = process.env.SERVER_BASE_URL;
  const token = await getUserToken()

  console.log(`${BASE_URL}${SERVER_ROUTES.person.getCurrent}`)
  console.log(token.token)

  const res = await fetch(`${BASE_URL}${SERVER_ROUTES.person.getCurrent}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token.token}`
    }
  })

  console.log(await res.json())
}