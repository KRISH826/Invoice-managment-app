"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <>
          <Button type="submit" className="w-full flex" disabled>
            <Loader2 className="animate-spin mr-1" />Please Wait...
          </Button>
        </>
      ) : (
        <Button type="submit" className="w-full flex">Login</Button>
      )}
    </>
  );
};

export default SubmitButton;
