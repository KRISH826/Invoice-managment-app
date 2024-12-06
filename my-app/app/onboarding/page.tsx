"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState } from "react";
import SubmitButton from "../components/SubmitButton";
import { onBoardUser } from "../server/action";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onBoardingSchema } from "../schema/onboarding";

const OnboardingPage = () => {
  const [lastresult, action] = useActionState(onBoardUser, undefined);
  const [form, fields] = useForm({
    lastResult: lastresult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: onBoardingSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <div className="onboarding_page h-screen w-full flex items-center justify-center">
      <Card className="w-[90%] md:w-[550px] sm:w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">You are almost done</CardTitle>
          <CardDescription className="text-base">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id={form.id}
            action={action}
            onSubmit={form.onSubmit}
            noValidate
          >
            <div className="flex flex-row gap-3">
              <div className="form_group flex-1">
                <Label>First Name</Label>
                <Input
                  placeholder="jhon"
                  key={fields.firstName.key}
                  name={fields.firstName.name}
                  type="text"
                  defaultValue={fields.firstName.initialValue}
                  className="mt-1"
                />
                <p className="text-red-500 mt-1 text-sm">{fields.firstName.errors}</p>
              </div>
              <div className="form_group flex-1">
                <Label>Last Name</Label>
                <Input
                  placeholder="doe"
                  type="text"
                  key={fields.lastName.key}
                  name={fields.lastName.name}
                  defaultValue={fields.lastName.initialValue}
                  className="mt-1"
                />
                <p className="text-red-500 mt-1 text-sm">{fields.lastName.errors}</p>
              </div>
            </div>
            <div className="form_group mt-3">
              <Label>Address</Label>
              <Input
                placeholder="Enter your address"
                type="text"
                key={fields.address.key}
                name={fields.address.name}
                defaultValue={fields.address.initialValue}
                className="mt-1"
              />
              <p className="text-red-500 mt-1 text-sm">{fields.address.errors}</p>
            </div>
            <div className="form_group mt-3">
              <SubmitButton label="Create Account" />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingPage;
