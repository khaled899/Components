"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import PropTypes from "prop-types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

export default function LoginForm({login}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(data) {
    console.log("Form Data:", data);
    // My Logic for handling signup goes here
  }
  return (
    <form className="space-y-4 mt-4" onSubmit={login.handleSubmit(handleLogin)}>
      <FormField
        control={login.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <div className="flex items-center border rounded px-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <Input className="border-0 focus:ring-0" type="email" placeholder="Enter Your Email" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={login.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <div className="flex items-center border rounded px-2">
                <Lock className="h-4 w-4 text-gray-400" />
                <Input className="border-0 focus:ring-0" type={showPassword ? "text" : "password"} placeholder="Enter Your Password" {...field} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
}

  LoginForm.propTypes = {
    login: PropTypes.shape({
      control: PropTypes.any.isRequired,
      handleSubmit: PropTypes.func.isRequired,
    }).isRequired,
  };