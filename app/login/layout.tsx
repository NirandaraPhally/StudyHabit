import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login — StudyHabit",
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EFF8FF] via-[#D8EAFE] to-[#DFF2FE]">
      {children}
    </section>
  )
}
