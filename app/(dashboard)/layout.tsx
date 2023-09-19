import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <UserButton afterSignOutUrl="/"/>
      hello world
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
