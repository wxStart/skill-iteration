export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1> 博客的 id: {params.id} </h1>
      url只有一个参数！！！
    </>
  );
}
