export default function Page({ params }: { params: { id: string[] } }) {
  return (
    <>
      <h1> 博客的 id: {JSON.stringify(params.id)} </h1>
      url 上有多个参数
    </>
  );
}
