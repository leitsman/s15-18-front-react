import { SERVER_ROUTES } from "@/constants/server.routes";
import { cookies } from "next/headers";

export async function POST(request) {
  const requestBody = await request.json();

  const BASE_URL = process.env.SERVER_BASE_URL || process.env.NEXT_PUBLIC_SERVER_BASE_URL;
  const path = SERVER_ROUTES.login;

  const cookieStore = cookies();

  const serverResponse = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = await serverResponse.json();
  console.log(data);

  if (data.token) {
    try {
      cookieStore.set("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      return Response.json({
        message: "usuario autorizado",
        data: requestBody,
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("usuario no autorizado");
    return Response.json({ message: "usuario no autorizado", data: null });
  }
}
