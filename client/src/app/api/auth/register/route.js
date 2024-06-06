export async function POST(request) {

  const requestBody = await request.json();

  console.log(requestBody)

  return Response.json({ saludo: "hola" })
}