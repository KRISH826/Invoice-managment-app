import React from "react";
import { auth } from "../utils/auth";
import Link from "next/link";
import { BookLock, FileBox } from "lucide-react";
import DashboardLinks from "./DashboardLinks";
import Header from "../components/Header";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[275px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <aside className="flex flex-col max-h-screen h-full gap-2">
                        <div className="h-14 flex items-center border-b px-3 lg:[h-60px] lg:px-6">
                            <Link href={"/"} className="flex gap-2 items-center">
                                <FileBox size={32} className="text-gray-950" />
                                <h1 className="text-blue-500 font-medium text-lg">
                                    Frank Invoice
                                </h1>
                            </Link>
                        </div>
                        <div className="flex px-3 flex-col gap-2 flex-1">
                            <DashboardLinks />
                        </div>
                    </aside>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Header />
                    <main className="flex flex-1 p-4 sm:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;
