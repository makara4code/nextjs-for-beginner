import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <nav className="flex gap-4 my-2">
        <Link href="/dashboard/page-views">
          <Button>Page Views</Button>
        </Link>
        <Link href="/dashboard/visitors">
          <Button>Visitors</Button>
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
