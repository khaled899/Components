"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { loginUser, signupUser, logoutUser, getProfile } from "@/lib/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      getProfile()
        .then((res) => {
          setUser(res.user || res);
        })
        .catch(() => logout());
    }
  }, [token]);

  const handleRedirect = (role) => {
    if (role === "admin") {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  };

  const login = async (data) => {
    setIsLoading(true);
    setErrors([]);
    try {
      const res = await loginUser(data);
      setUser(res.user);
      setToken(res.token);
      Cookies.set("token", res.token, { expires: 7 });
      handleRedirect(res.user.role);
    } catch (err) {
      setErrors(err.errors || [{ message: "Login failed" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data) => {
    setIsLoading(true);
    setErrors([]);
    try {
      const res = await signupUser(data);
      setUser(res.user);
      setToken(res.token);
      Cookies.set("token", res.token, { expires: 7 });
      handleRedirect(res.user.role);
    } catch (err) {
      setErrors(err.errors || [{ message: "Signup failed" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    setToken(null);
    router.push("/login");
  };

  return <AuthContext.Provider value={{ user, token, isLoading, errors, login, signup, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
