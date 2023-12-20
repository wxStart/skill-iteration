export default function Page() {
  
  // throw Error("主动产生的出错了");
  let a:any={}
  return (
    <div>
      <h1>/error/about</h1>
      <div style={{ height: "300px" }}>
         about
        <div>error 》about {a.b.c}</div>
      </div>
    </div>
  );
}
