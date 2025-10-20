import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <Badge variant="secondary" className="w-fit rounded-full bg-primary/10 text-primary hover:bg-primary/20">
            🚀 Transform Your Study Journey!
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-balance md:text-5xl lg:text-6xl">
              Track 🎯 Improve 📈 Achieve 🎉
            </h1>

            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Hey there, gorgeous student! 👋 Ready to level up your study game? Join thousands of awesome learners who
              are crushing their goals with StudyHack! Let's make learning fun together! 🎓
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-secondary to-primary text-white shadow-lg hover:shadow-xl"
            >
              Create Organization 🚀
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              How it Works? 🤔
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="w-fit rounded-full border">
            Login
          </Button>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">10,000+ 😍</p>
                <p className="text-xs text-muted-foreground">Happy Students</p>
              </div>
            </div>

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
        <div className="relative flex items-center justify-center">
          <Card className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600">
              <Image src="/happy-smiling-student-with-thumbs-up-professional-.jpg" alt="Happy student" fill className="object-cover" priority />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="flex items-center gap-3 bg-white/95 p-4 backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <span className="text-lg">📊</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">+75% This Week! 🎉</p>
                    <p className="text-xs text-muted-foreground">You're on fire!</p>
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
