import React from "react";
import { requireUser } from "../utils/hooks";
import { signOut } from "../utils/auth";
import { Button } from "@/components/ui/button";

async function DashboardPage() {
  const session = await requireUser();
  return (
    <>
      <div>DashboardPage</div>
    </>
  );
}

export default DashboardPage;
