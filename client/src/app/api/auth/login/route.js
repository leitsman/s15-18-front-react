import { cookies } from "next/headers";

export async function POST(request) {
  const requestBody = await request.json();

  const BASE_URL = "https://7ffc-181-168-133-217.ngrok-free.app/api/v1";
  const path = "/auth/login";

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

  const user = {
    userId: "recycle_authorized_member",
    name: "JAM",
    image: "https://github.com/jandres373.png",
  };

  if (data.token) {
    try {
      cookieStore.set("userId", user.userId, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
      cookieStore.set("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      console.log({ message: "usuario autorizado", data: requestBody });
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
