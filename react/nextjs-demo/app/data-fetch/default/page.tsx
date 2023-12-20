// "use client";
async function getData() {
  const res = await fetch("https://api.lolimi.cn/API/naen/api.php");
  console.log("res: ", res);
  console.log("res.ok: ", res.ok);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// 服务器端渲染才可以使用 异步函数
export default async function Page() {
  const data = await getData();
  console.log("data: ", data);

  return (
    <main>
      <div>随机获取的名字：{data.data.name}</div>
    </main>
  );
}
