export default function Page({ params }: { params: { cid: string } }) {
  return (
    <>
      <h1> app: {JSON.stringify(params)} </h1>
      只有cid！！！
    </>
  );
}
