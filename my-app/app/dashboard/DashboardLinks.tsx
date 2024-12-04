"use client";
import { cn } from "@/lib/utils";
import { FileChartColumn, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const dashboardlinks = [
  {
    id: 0,
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 1,
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: FileChartColumn,
  },
];

function DashboardLinks() {
  const pathname = usePathname();
  return (
    <>
      {dashboardlinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            pathname === link.href ? "text-blue-600 bg-blue-100" : "text-gray-700",
            "flex px-2 py-2 rounded-md items-center gap-3 text-sm transition-all font-medium leading-6 hover:bg-blue-100 hover:text-blue-600"
          )}
        >
          <link.icon className="h-6 w-6" aria-hidden="true" />
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default DashboardLinks;
