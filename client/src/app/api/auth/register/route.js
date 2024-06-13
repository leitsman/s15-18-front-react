import { SERVER_ROUTES } from "@/constants/server.routes";

export async function POST(request) {
  const requestBody = await request.json();

  const BASE_URL = process.env.SERVER_BASE_URL;
  const path = SERVER_ROUTES.register;

  const serverResponse = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = await serverResponse.json();
  console.log(data);

  return Response.json({ saludo: "hola" });
}
