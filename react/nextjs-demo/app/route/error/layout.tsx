import Link from "next/link";
export default function LadingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav> 这里是 Error Layout </nav>
      <div>
        <Link style={{color:'red'}} href="/error/user">/error/user </Link><br />
        <Link style={{color:'red'}} href="/error/about">/error/about </Link>
      </div>
      {children}
    </section>
  );
}
