import { UserButton } from "@clerk/nextjs";
import React from "react";

const NavbarRoutes = () => {
  return (
    <div className="flex ml-auto gap-x-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
