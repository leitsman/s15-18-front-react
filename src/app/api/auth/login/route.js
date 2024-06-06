import { cookies } from "next/headers";

export async function POST(request) {
  const cookieStore = cookies()

  const requestBody = await request.json();

  const user = {
    userId: "recycle_authorized_member",
    name: "JAM",
    image: "https://github.com/jandres373.png"
  }

  if (requestBody.email === "admin@recycle.com") {
    try {
      cookieStore.set("userId", user.userId, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30
      })
      console.log({ message: "usuario autorizado", data: requestBody })
      return Response.json({ message: "usuario autorizado", data: requestBody })
    } catch (error) {
      console.error(error)
    }
  } else {
    console.error("usuario no autorizado")
    return Response.json({ message: "usuario no autorizado", data: null })
  }
}