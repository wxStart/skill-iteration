export default function Page({
  params,
}: {
  params: { cid: string; kid: string };
}) {
  return (
    <>
      <h1> app: {JSON.stringify(params)} </h1>
      cid+kid
    </>
  );
}
