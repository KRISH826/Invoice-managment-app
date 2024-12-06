import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Ellipsis } from "lucide-react";
import React from "react";

const ActionList = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"default"}>
                <Ellipsis className="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit Invoice</DropdownMenuItem>
          <DropdownMenuItem>Reminder Mail</DropdownMenuItem>
          <DropdownMenuItem>Download Invoice</DropdownMenuItem>
          <DropdownMenuItem>Delete Invoice</DropdownMenuItem>
          <DropdownMenuItem>Mark as Read</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ActionList;
