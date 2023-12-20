export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav> 这里是 blog Layout  </nav>
        {children}
      </section>
    )
  }