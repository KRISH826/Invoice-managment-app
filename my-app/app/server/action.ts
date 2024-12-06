"use server";

import { requireUser } from "../utils/hooks";
import { parseWithZod } from "@conform-to/zod";
import { onBoardingSchema } from "../schema/onboarding";
import prisma from "../utils/db";
import { redirect } from "next/navigation";

export async function getUser(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastname: true,
      address: true,
    },
  });

  if (!data?.firstName || !data?.lastname || !data?.address) {
    return redirect("/onboarding");
  }
}

export async function onBoardUser(prevState: any, formData: FormData) {
  const session = await requireUser();
  const submission = parseWithZod(formData, {
    schema: onBoardingSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      firstName: submission.value.firstName,
      lastname: submission.value.lastName,
      address: submission.value.address,
    },
  });

  return redirect("/dashboard");
}
