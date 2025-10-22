"use client"

import Link from "next/link"
import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { useSetup } from "../../lib/setup-context"

export default function PaymentPage() {
  const { data } = useSetup()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50/30">
      <div className="container mx-auto px-4 pt-6">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-purple-600 shadow-sm hover:bg-purple-50">
          ← Back Home
        </Link>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 flex flex-col items-center space-y-3">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-purple-600"></div>
            <div className="relative z-10 text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7h18v10H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 11h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold">Choose Your Plan</h1>
          <p className="text-muted-foreground">Select a subscription plan for your organization</p>
        </div>

        <div className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">✓</div>
            <span className="text-sm font-medium text-green-600">Organization</span>
          </div>

          <div className="mx-4 h-[2px] w-16 bg-green-500"></div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">✓</div>
            <span className="text-sm font-medium text-green-600">Admin</span>
          </div>

          <div className="mx-4 h-[2px] w-16 bg-purple-600"></div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">3</div>
            <span className="text-sm text-purple-600">Payment</span>
          </div>
        </div>

        <Card className="rounded-3xl">
          <div className="p-8">
            <div className="mb-6">
              <div className="rounded-lg bg-green-50/50 p-4">
                <p className="text-sm font-medium">
                  Admin: {data.admin.fullName || "Not specified"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Organization: {data.organization.organizationName || "Not specified"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Type: {data.organization.organizationType || "Not specified"} • Size: {data.organization.expectedStudents || "Not specified"} students
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-purple-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="text-sm font-semibold">Monthly Plan</span>
                      <span className="text-xs text-purple-600">Selected</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Pay month-to-month, cancel anytime</p>
                    <p className="text-lg font-bold mt-2">$49/month</p>
                    <p className="text-xs text-gray-400">Unlimited students • All features</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="text-sm font-semibold">Yearly Plan</span>
                      <span className="text-xs text-gray-500">Best value • 2 months free</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">$470/year <span className="text-xs text-gray-400 line-through">$588</span></p>
                    <p className="text-xs text-gray-400">Unlimited students • All features • Priority support</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50/50 p-4">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✅ Unlimited student invitations</li>
                  <li>✅ Full admin dashboard & analytics</li>
                  <li>✅ Study tracking & leaderboard</li>
                  <li>✅ Progress reports & insights</li>
                  <li>✅ Email support</li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6">
                <Link href="/admin">
                  <Button variant="outline" className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">← Back</Button>
                </Link>
                <Button className="rounded-full bg-green-600 px-8 py-2.5 text-sm font-medium text-white hover:bg-green-700">Complete Setup & Start Free Trial 🌱</Button>
              </div>
            </div>
          </div>
        </Card>

        <p className="mt-6 text-center text-sm text-gray-500">Already have an admin account? <Link href="/login" className="text-purple-600">Login here →</Link></p>
      </div>
    </div>
  )
}
