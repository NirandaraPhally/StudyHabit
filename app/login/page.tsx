"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Building, Lock, Cloud, GraduationCap, User, Mail, Shield } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF8FF] via-[#D8EAFE] to-[#DFF2FE]">
      {/* Back button - Absolute positioning like other pages */}
      <div className="absolute top-6 left-4 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back Home</span>
        </Link>
      </div>

      <div className="container mx-auto max-w-md px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">StudyHabit</h1>
          <h2 className="text-lg font-semibold text-foreground mb-1">Admin & Student Login</h2>
          <p className="text-sm text-muted-foreground">Access your StudyHabit account</p>
        </div>

        {/* Main Login Card */}
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            {/* Welcome Section */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Welcome Back! 👋</h3>
              <p className="text-sm text-muted-foreground">Enter your credentials to continue</p>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded border-gray-300" />
                <label htmlFor="remember" className="flex items-center text-sm cursor-pointer">
                  <Cloud className="h-4 w-4 mr-2 text-muted-foreground" />
                  Remember me
                </label>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Login 🚀
              </Button>
            </form>

            {/* Separator */}
            <div className="relative my-6">
              <hr className="border-gray-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-3 text-sm text-muted-foreground">
                  or try a demo 👆
                </span>
              </div>
            </div>

            {/* Demo Options */}
            <div className="space-y-3">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Student Demo</h4>
                      <p className="text-xs text-blue-700">Access: Dashboard, Leaderboard, Study Sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <User className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900">Admin Demo</h4>
                      <p className="text-xs text-purple-700">Access: Admin Dashboard, User Management, Analytics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">New student?</h4>
                  <p className="text-xs text-muted-foreground">
                    Contact your admin to receive an invitation link. Only invited users can create accounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Administrator?</h4>
                  <p className="text-xs text-muted-foreground">
                    Use your admin credentials to access user management and invite new students.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
