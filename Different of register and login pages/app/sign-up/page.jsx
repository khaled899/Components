"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { registerSchema } from "../../utils/RegisterSchema";
import { SignupForm } from "../../components/signup-form";

export default function SignupPage() {
   const signup = useForm({
     resolver: zodResolver(registerSchema),
     defaultValues: {
       firstName: "",
       lastName: "",
       email: "",
       password: "",
       confirmPassword: "",
     },
   });

  return (
    <div className="flex flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Form {...signup}>
          <SignupForm signup={signup} />
        </Form>
      </div>
    </div>
  );
}
