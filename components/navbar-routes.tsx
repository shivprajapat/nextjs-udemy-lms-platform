"use client";
import { LogOut } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  return (
    <>
      {isSearchPage && <div className="hidden md:block">search</div>}
      <div className="flex ml-auto gap-x-2">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : 
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
       }
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
