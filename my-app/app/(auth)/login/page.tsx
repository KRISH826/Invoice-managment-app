import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { auth, signIn } from "../../utils/auth";
import SubmitButton from "@/app/components/SubmitButton";
import { redirect } from "next/navigation";

async function LoginPage() {
  const session = await auth();
  if(session?.user) {
    redirect('/dashboard');
  }
  return (
    <div className="login_page h-screen flex items-center justify-center">
      <Card className="w-[90%] sm:w-[500px]">
        <CardHeader>
          <CardTitle className="text-left text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login in to your account
          </CardDescription>
        </CardHeader>
        <form action={async (formData) => {
        "use server"
        await signIn("nodemailer", formData);
      }}>
          <CardContent>
            <div className="form_group">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>
            <div className="form_group mt-3">
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="mt-1"
              />
            </div>
            <div className="form_group mt-3">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start justify-start">
            <SubmitButton label="Login" />
            <CardDescription className="text-start mt-2">Don't have an account? <Link className="text-primary font-medium" href={"/signup"}>Sign up</Link></CardDescription>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
