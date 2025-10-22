"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import Link from "next/link"

export default function CreateOrganization() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50/30">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-purple-600 shadow-sm hover:bg-purple-50"
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

      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center space-y-3">
          <div className="flex items-center justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-purple-600"></div>
              <div className="relative z-10">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M15 9L11 13L9 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Create Your Organization 🚀</h1>
          <p className="text-muted-foreground">
            Set up your admin account and start inviting students
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-green-600">Organization</span>
            </div>

            <div className="mx-4 h-[2px] w-16 bg-purple-600"></div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                <span className="text-sm font-medium">2</span>
              </div>
              <span className="text-sm font-medium text-purple-600">Admin</span>
            </div>

            <div className="mx-4 h-[2px] w-16 bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                <span className="text-sm font-medium">3</span>
              </div>
              <span className="text-sm text-gray-400">Payment</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="overflow-hidden rounded-2xl border bg-white shadow-lg">
          <div className="p-8">
            <div className="mb-8 flex flex-col items-center space-y-2">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-purple-600/10"></div>
                <div className="relative z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                  >
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M15 9L11 13L9 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold">Admin Account Setup 👋</h2>
              <p className="text-sm text-muted-foreground">
                Create your administrator credentials
              </p>
            </div>

            <form className="space-y-4" autoComplete="off" noValidate>
              {/* Prevent some browsers from autofilling by placing a hidden dummy input */}
              <input type="text" name="__no_autofill" autoComplete="off" className="hidden" />
              <div className="rounded-xl bg-blue-50/50 p-4">
                <div className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Organization:ffglfglsglsglflglg</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Type: university • Size: 101-500 students
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-sm text-gray-600">Your Full Name *</p>
                <Input
                  type="text"
                  placeholder="e.g., Dr. Sarah Johnson"
                  className="h-11 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm text-gray-600">Admin Email Address *</p>
                <Input
                  type="email"
                  name="admin_contact_email_nonstandard"
                  placeholder="admin@yourschool.edu"
                  autoComplete="off"
                  className="h-11 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm text-gray-600">Create Password *</p>
                <Input
                  type="password"
                  name="new_password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  className="h-11 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm text-gray-600">Confirm Password *</p>
                <Input
                  type="password"
                  name="confirm_new_password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  className="h-11 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center justify-between pt-6">
                <Link href="/organization">
                  <Button
                    variant="outline"
                    className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    ← Back
                  </Button>
                </Link>
                <Link href="/payment">
                  <Button
                    className="rounded-full bg-purple-600 px-8 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
                  >
                    Continue to Payment →
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </Card>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an admin account?{" "}
          <Link href="/login" className="text-purple-600 hover:underline">
            Login here →
          </Link>
        </p>
      </div>
    </div>
  )
}