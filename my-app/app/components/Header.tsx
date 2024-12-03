import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import DashboardLinks from "../dashboard/DashboardLinks";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { auth } from "../utils/auth";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";

async function Header() {
  const session = await auth();
  console.log(session);
  return (
    <header className="flex justify-between items-center h-14 sm:px-5 px-4 border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex-1 flex flex-col gap-1 mt-7">
            <DashboardLinks />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
