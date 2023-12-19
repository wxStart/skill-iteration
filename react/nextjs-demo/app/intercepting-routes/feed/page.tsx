
import Link from "next/link";

export default function Page() {
    return <div className="bg-green-300" >


        <Link href='/intercepting-routes/photo'>路由拦截 我本来想访问/intercepting-routes/photo  结果访问到了  /intercepting-routes/feed/photo</Link>
    </div>;
  }
  