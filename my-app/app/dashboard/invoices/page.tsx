import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import React from "react";
import InvoiceList from "./InvoiceList";
import Link from "next/link";

function InvoicesPage() {
  return (
    <div className="invoices_page w-full">
      <Card className="w-full">
        <CardHeader className="w-full flex flex-row items-center justify-between gap-2 flex-wrap">
          <div>
            <CardTitle className="text-2xl">Invoices</CardTitle>
            <CardDescription>Manage Your Invoices Here</CardDescription>
          </div>
          <div>
            <Link
              className={buttonVariants({ className: "w-full" })}
              href="/dashboard/invoices/create"
            >
              <PlusIcon /> Create Invoice
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <InvoiceList />
        </CardContent>
      </Card>
    </div>
  );
}

export default InvoicesPage;
