export async function GET(request: Request) {
  const res = await fetch("https://api.lolimi.cn/API/naen/api.php", {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 }, 
  });
  const data = await res.json();

  return Response.json({ data, m: "get1" });
}
export async function POST(request: Request) {
  const res = await fetch("https://api.lolimi.cn/API/naen/api.php", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data, m: "post" });
}
