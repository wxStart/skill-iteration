
import Link from "next/link";

export default function Page() {
    return <div className="bg-green-300" >
        <Link href='/route/intercepting-routes/photo'>路由拦截 我本来想访问/route/intercepting-routes/photo  结果访问到了  /route/intercepting-routes/feed/photo</Link>
    </div>;
  }
  