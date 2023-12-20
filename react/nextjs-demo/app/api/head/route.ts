import { cookies, headers } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  // console.log("cookieStore: ", cookieStore);
  const token = cookieStore.get("token") || { value: "xsxasd" + Date.now() };

  const headersList = headers(); // 获取headers
  const referer = headersList.get("referer") ;
  console.log(headersList.get("Cookie"))
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token.value}`, referer: referer as string },
  });
}
