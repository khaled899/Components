"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { loginSchema, signupSchema } from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";

export default function AuthForm() {
  const { login, signup, isLoading, errors } = useAuth();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    setValidationErrors([]); // clear old errors

    const parsed = loginSchema.safeParse(loginData);
    if (!parsed.success) {
      setValidationErrors(parsed.error.errors); // zod errors
      return;
    }
    login(parsed.data);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setValidationErrors([]);

    const parsed = signupSchema.safeParse(signupData);
    if (!parsed.success) {
      setValidationErrors(parsed.error.errors);
      return;
    }
    signup(parsed.data);
  };

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

            {/* LOGIN */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <div>
                  <Label>Email</Label>
                  <Input type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                </div>

                {/* Show Validation Errors */}
                {validationErrors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}

                {/* Show Backend Errors */}
                {errors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Loading..." : "Login"}
                </Button>
              </form>
            </TabsContent>

            {/* SIGNUP */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label>First Name</Label>
                    <Input value={signupData.firstName} onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })} />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input value={signupData.lastName} onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })} />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input type="password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
                </div>
                <div>
                  <Label>Confirm Password</Label>
                  <Input type="password" value={signupData.confirmPassword} onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} />
                </div>

                {validationErrors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}

                {errors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Creating..." : "Signup"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
