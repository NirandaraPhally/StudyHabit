import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-12">
        {/* Left Column - Content */}
          <div className="flex flex-col justify-start space-y-6 pt-4">
          <Badge variant="secondary" className="w-fit rounded-full bg-primary/10 text-primary hover:bg-primary/20">
            🚀 Transform Your Study Journey!
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-balance md:text-5xl lg:text-6xl">
              Track 🎯 Improve 📈 Achieve 🎉
            </h1>

            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Hey there, gorgeous student! 👋 Ready to level up your study game? Join thousands of awesome learners who
              are crushing their goals with StudyHabit! Let&apos;s make learning fun together! 🎓
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/admin">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-secondary to-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Create Organization 🚀
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer">
              How it Works? 🤔
            </Button>
          </div>

          <div className="flex justify-start">
            <Link href="/login">
              <Button variant="ghost" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
                Login🚀
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">10,000+ 😍</p>
                <p className="text-xs text-muted-foreground">Happy Students</p>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="h-8 w-px bg-primary"></div>

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">WAH=0 🎉</p>
                <p className="text-xs text-muted-foreground">Wasted Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="relative flex h-full w-full items-center justify-center lg:min-h-[420px]">
          <Card className="relative h-full w-full max-w-[500px] sm:max-w-[420px] md:max-w-[360px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600">
              <Image 
                src="/student.jpg" 
                alt="Happy student" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority 
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-4 z-10">
                <Card className="flex items-center gap-3 bg-white/95 p-4 backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <span className="text-lg">📊</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">+75% This Week! 🎉</p>
                    <p className="text-xs text-muted-foreground">You&apos;re on fire!</p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
