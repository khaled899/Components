"use client";
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {  FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function SignupForm({ signup }) {
    const [showPassword, setShowPassword] = useState(false);
  
  function handleSignup(data) {
    console.log("Form Data:", data);
    // My Logic for handling signup goes here
  }
  return (
    <form className="space-y-4 mt-4" onSubmit={signup.handleSubmit(handleSignup)}>
      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={signup.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                 <div className="flex items-center border rounded px-2">
                      <User className="h-4 w-4 text-gray-400" />
                <Input className="border-0 focus:ring-0" placeholder="Enter Your First Name" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signup.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={signup.control}
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
        control={signup.control}
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

      <FormField
        control={signup.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <div className="flex items-center border rounded px-2">
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

      <Button type="submit" className="w-full">
        Signup
      </Button>
    </form>
  );
}
SignupForm.propTypes = {
  signup: PropTypes.shape({
    control: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignupForm;

