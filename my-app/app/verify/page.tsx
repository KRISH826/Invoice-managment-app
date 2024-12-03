import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftCircle, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Verify() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[350px] pt-5 sm:w-[450px]">
        <CardContent className="flex flex-col gap-1 items-center justify-center">
          <div className="icon size-20 rounded-full grid place-items-center bg-blue-200">
            <MailIcon size={40} className="text-blue-800" />
          </div>
          <CardTitle className="text-2xl mt-2">
            Check Your Email
          </CardTitle>
          <CardDescription>
            We have sent a verification link to your email address
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/" className={buttonVariants({
            className: "w-full"
          })}>
            <ArrowLeftCircle color="white" /> Back To Home Page
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Verify;
