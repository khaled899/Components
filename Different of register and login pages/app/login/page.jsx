"use client";

import { LoginForm } from "../../components/login-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/utils/LoginSchema";
import { Form } from "@/components/ui/form";



export default function LoginPage() {
  const login = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Form {...login}>
          <LoginForm login={login} />
        </Form>
      </div>
    </div>
  );
}
