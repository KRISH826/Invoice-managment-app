import { Button } from "@/components/ui/button";
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
            <Button><PlusIcon /> Create Invoice</Button>
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
