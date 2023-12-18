export default function Page() {
  return (
    <div>
      <div className="m-1  hover:text-green-500 first:hover:text-red-500" > slot children</div>
      <div className="m-1  hover:text-green-500 first:hover:text-red-500" > slot children</div>
    </div>
  );
}
