"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/utils/RegisterSchema";
import { Form} from "./ui/form";
import SignupForm from "./SignupForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import { loginSchema } from "@/utils/LoginSchema";


export default function AuthForm() {
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
  const login = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Welcome</CardTitle>
          <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Form {...login}>
                <LoginForm login={login} />
              </Form>
            </TabsContent>

            <TabsContent value="signup">
              <Form {...signup}>
                {/* Ensure SignupForm or any child component rendering lists uses unique keys */}
                <SignupForm signup={signup} />
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
