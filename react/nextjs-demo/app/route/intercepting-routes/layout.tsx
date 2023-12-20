export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <div> intercepting-routes </div>
      <div >{props.children}</div>
    </div>
  );
}
