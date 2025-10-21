import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "StudyHabit - Transform Your Study Journey",
  description:
    "Track, improve, and achieve your study goals with StudyHabit. Join thousands of students crushing their goals!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-gradient-to-br from-[#EFF8FF] via-[#D8EAFE] to-[#DFF2FE] min-h-screen`}>
        <div className="bg-gradient-to-br from-[#EFF8FF] via-[#D8EAFE] to-[#DFF2FE] min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
