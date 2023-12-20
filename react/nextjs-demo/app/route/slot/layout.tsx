export default function Layout(props: {
  left: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-orange-500 px-1 py-1 text-red-50">
      <div className="flex-1">{props.left}</div>
      <div className={"mx-4"}>{props.children}</div>
    </div>
  );
}
