import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 border-b bg-background px-4 sm:px-6">
      <div className="flex items-center justify-between max-w-4xl h-16">
        <div className="flex gap-4">
          <Link href={"/"} className="flex items-center gap-2">
            <ExternalLinkIcon className="w-6 h-6" />
            <span className="font-bold">ShareJSON.</span>
          </Link>
          <nav className="">
            <Link href={"/dashboard"} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ">Dashboard</Link>
          </nav>
        </div>
        <Button variant={"outline"}>Sign in</Button>
      </div>
    </div>
  );
};

export default Navbar;
