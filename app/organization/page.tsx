"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useSetup } from "../../lib/setup-context"

export default function OrganizationDetails() {
  const { data, updateOrganization } = useSetup()
  const router = useRouter()
  const [formData, setFormData] = useState({
    organizationType: data.organization.organizationType,
    organizationName: data.organization.organizationName,
    expectedStudents: data.organization.expectedStudents
  })

  const handleInputChange = (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value }
    setFormData(newFormData)
    // Save to context immediately for real-time updates
    updateOrganization(newFormData)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateOrganization(formData)
    // Navigate to admin page
    router.push("/admin")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50/30">
      <div className="container mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-purple-600 shadow-sm hover:bg-purple-50"
        >
          ← Back Home
        </Link>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 flex flex-col items-center space-y-3">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-purple-600"></div>
            <div className="relative z-10 text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 9L11 13L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold">Create Your Organization 🚀</h1>
          <p className="text-muted-foreground">Set up your admin account and start inviting students</p>
        </div>

        <div className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">1</div>
            <span className="text-sm font-medium text-purple-600">Organization</span>
          </div>

          <div className="mx-4 h-[2px] w-16 bg-gray-200"></div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">2</div>
            <span className="text-sm text-gray-400">Admin</span>
          </div>

          <div className="mx-4 h-[2px] w-16 bg-gray-200"></div>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400">3</div>
            <span className="text-sm text-gray-400">Payment</span>
          </div>
        </div>

        <Card className="rounded-3xl">
          <div className="p-8">
            <div className="mb-6 text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600">
                  <path d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">Organization Details</h2>
              <p className="text-sm text-gray-500">Tell us about your school or institution</p>
            </div>

            <form className="space-y-4" autoComplete="off" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-gray-600">Organization Type *</label>
                <Input 
                  type="text" 
                  placeholder="e.g., University, High School, College" 
                  className="h-11 rounded-lg border border-gray-200 px-4"
                  value={formData.organizationType}
                  onChange={(e) => handleInputChange('organizationType', e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Organization Name *</label>
                <Input 
                  type="text" 
                  placeholder="e.g., Lincoln High School" 
                  className="h-11 rounded-lg border border-gray-200 px-4"
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange('organizationName', e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Expected Number of Students *</label>
                <Input 
                  type="text" 
                  placeholder="e.g., 100-500" 
                  className="h-11 rounded-lg border border-gray-200 px-4"
                  value={formData.expectedStudents}
                  onChange={(e) => handleInputChange('expectedStudents', e.target.value)}
                  required
                />
              </div>

              <div className="rounded-lg bg-purple-50/50 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Admin Account:</p>
                    <p className="text-xs text-gray-500">You'll be the primary administrator with full control over student invitations and billing.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit"
                  className="w-full rounded-full bg-purple-600 text-white px-6 py-3"
                >
                  Continue to Admin Setup →
                </Button>
              </div>
            </form>
          </div>
        </Card>

        <p className="mt-6 text-center text-sm text-gray-500">Already have an admin account? <Link href="/login" className="text-purple-600">Login here →</Link></p>
      </div>
    </div>
  )
}
