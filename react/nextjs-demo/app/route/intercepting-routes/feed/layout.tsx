export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <div>feed layout</div>
      <div >{props.children}</div>
    </div>
  );
}
