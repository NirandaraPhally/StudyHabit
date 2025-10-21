import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "StudyHabit - Transform Your Study Journey",
  description:
    "Track, improve, and achieve your study goals with StudyHabit. Join thousands of students crushing their goals!",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-[#EFF8FF] via-[#D8EAFE] to-[#DFF2FE] min-h-screen`}>
        <div className="bg-gradient-to-br from-[#EFF8FF] via-[#D8EAFE] to-[#DFF2FE] min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
