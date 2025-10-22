"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export default function StudentInvitation() {
  const [invitationCode, setInvitationCode] = useState("")

  const handleVerifyCode = () => {
    if (!invitationCode.trim()) {
      alert("Please enter an invitation code")
      return
    }
    // Here you would typically validate the code with your backend
    console.log("Verifying code:", invitationCode)
    // For now, just show success
    alert("Code verified! Redirecting to student dashboard...")
  }

  const handleDemoCode = (code: string) => {
    setInvitationCode(code)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back Home
        </Link>
      </div>

      <div className="container mx-auto max-w-md px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center space-y-4">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-blue-600 shadow-lg"></div>
            <div className="relative z-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900">Student Invitation 🎉</h1>
          <p className="text-center text-gray-600">
            Enter your invitation code to get started
          </p>
        </div>

        {/* Main Card */}
        <Card className="overflow-hidden rounded-3xl border bg-white shadow-lg">
          <div className="p-8">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome! 🎉</h2>
              <p className="text-gray-600">
                Your admin has invited you to join StudyHabit
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleVerifyCode(); }}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Invitation Code</label>
                <Input
                  type="text"
                  placeholder="E.G., STUDY2025"
                  value={invitationCode}
                  onChange={(e) => setInvitationCode(e.target.value.toUpperCase())}
                  className="h-12 rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-lg font-mono tracking-wider placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Info Box */}
              <div className="rounded-xl bg-blue-50/50 border border-blue-200 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Check your email for your unique invitation code. If you haven't received one, contact your administrator.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700 hover:scale-105 transition-all duration-200"
              >
                Verify Code ✨
              </Button>
            </form>

            {/* Demo Codes Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">Demo Codes (for testing):</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <span className="text-sm text-gray-600">STUDY2025 → John Doe</span>
                  <button
                    onClick={() => handleDemoCode("STUDY2025")}
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Use Code
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <span className="text-sm text-gray-600">LEARN123 → Jane Smith</span>
                  <button
                    onClick={() => handleDemoCode("LEARN123")}
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Use Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here →
          </Link>
        </p>
      </div>
    </div>
  )
}
