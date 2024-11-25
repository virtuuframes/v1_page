import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, LogIn } from 'lucide-react'
import { Link } from "react-router-dom"
import axios from "axios"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempted with:", { email, password })
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login/",
        {email, password},
        {withCredentials: true}
      )

      if (response.status === 200) {
        alert("Login successful!")
        window.location.href = "/profile"
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.3) 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
        <Card className="w-full max-w-md rounded-xl shadow-[8px_8px_16px_4px_rgba(100,61,242,0.3)] z-10 bg-white">
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-2xl font-bold">Login</h1>
              <div className="w-6" /> {/* Spacer for alignment */}
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-sm text-[#643DF2] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Or continue with</p>
              <div className="flex justify-center">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#643DF2] hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/halftone_background_13-oPP5kfWMUUBVyKuRHbCAcubYirm2P3.jpg')"}}>
      </div>
    </div>
  )
}