import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function LoginPage() {
  return (
    <div className="login_page h-screen flex items-center justify-center">
      <Card className="w-[90%] sm:w-[500px]">
        <CardHeader>
          <CardTitle className="text-left text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login in to your account
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            <div className="form_group">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>
            <div className="form_group mt-3">
              <Label>Name</Label>
              <Input
                type="text"
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
          <CardFooter>
            <Button type="submit" className="w-full">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
