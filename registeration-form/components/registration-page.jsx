"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle, Check, X, AlertTriangle } from "lucide-react"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

const PasswordStrengthIndicator = ({ password }) => {
  const requirements = [
    { label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
    { label: "Contains uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
    { label: "Contains lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
    { label: "Contains number", test: (pwd) => /\d/.test(pwd) },
    { label: "Contains special character", test: (pwd) => /[!@#$%^&*(),.?\":{}|<>]/.test(pwd) },
  ]

  const strength = requirements.filter((req) => req.test(password)).length
  const strengthColors = ["bg-red-500", "bg-red-400", "bg-yellow-500", "bg-yellow-400", "bg-green-500"]
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"]

  if (!password) return null

  return (
    <div className="space-y-2 mt-2">
      <div className="flex items-center gap-2">
        <div className="flex gap-1 flex-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 sm:h-1 flex-1 rounded ${
                i < strength ? strengthColors[strength - 1] : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
        <span className="text-xs sm:text-[10px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
          {strength > 0 ? strengthLabels[strength - 1] : ""}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-0.5">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-2 text-xs sm:text-[10px]">
            {req.test(password) ? (
              <Check className="h-3 w-3 sm:h-2.5 sm:w-2.5 text-green-500 flex-shrink-0" />
            ) : (
              <X className="h-3 w-3 sm:h-2.5 sm:w-2.5 text-gray-400 flex-shrink-0" />
            )}
            <span
              className={`${req.test(password) ? "text-green-600 dark:text-green-400" : "text-gray-500"} leading-tight`}
            >
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export default function RegistrationPage() {
  const router = useRouter()
  const { login, user } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [validationErrors, setValidationErrors] = useState([])
  const [touched, setTouched] = useState({})
  const [serverErrors, setServerErrors] = useState([])

  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  const handleLogin = async (e) => {
    e.preventDefault()
    setValidationErrors([])
    setServerErrors([])

    const result = loginSchema.safeParse(loginData)
    if (!result.success) {
      setValidationErrors(result.error.errors)
      return
    }

    setIsLoading(true)
    try {
      await login(loginData.email, loginData.password)
      router.push("/")
    } catch (err) {
      setServerErrors([{ message: err.message || "Login failed. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setValidationErrors([])
    setServerErrors([])

    const result = signupSchema.safeParse(signupData)
    if (!result.success) {
      setValidationErrors(result.error.errors)
      return
    }

    setIsLoading(true)
    try {
      // Call signup API here
      setMessage("Account created successfully! You can now log in.")
    } catch (err) {
      setServerErrors([{ message: err.message || "Signup failed. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Welcome</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <div>
                  <Label>Email</Label>
                  <div className="flex items-center border rounded px-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="border-0 focus:ring-0"
                    />
                  </div>
                </div>
                <div>
                  <Label>Password</Label>
                  <div className="flex items-center border rounded px-2">
                    <Lock className="h-4 w-4 text-gray-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="border-0 focus:ring-0"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                {validationErrors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}
                {serverErrors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Loading..." : "Login"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label>First Name</Label>
                    <div className="flex items-center border rounded px-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <Input
                        value={signupData.firstName}
                        onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                        className="border-0 focus:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input
                      value={signupData.lastName}
                      onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  />
                  <PasswordStrengthIndicator password={signupData.password} />
                </div>
                <div>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  />
                </div>
                {validationErrors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}
                {serverErrors.map((err, i) => (
                  <Alert key={i} variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{err.message}</AlertDescription>
                  </Alert>
                ))}
                {message && (
                  <Alert variant="success">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>{message}</AlertDescription>
                  </Alert>
                )}
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Creating..." : "Signup"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
