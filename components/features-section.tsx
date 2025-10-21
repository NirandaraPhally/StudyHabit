import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Trophy, Crosshair, Heart, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Track Every Moment 📊",
    description:
      "Log all your awesome study sessions and watch your progress grow! See exactly what you're learning and when you're crushing it! 🌟",
  },
  {
    icon: TrendingUp,
    title: "Beautiful Graphs 📈",
    description:
      "See your progress come to life with stunning visualizations! Watch your study streaks grow and your insights hit all YOUR 🎯",
  },
  {
    icon: Trophy,
    title: "Epic Leaderboards 🏆",
    description:
      "Compare with your squad! Friendly competition makes learning FUN! 🎮 See who's the study champion today!",
  },
  {
    icon: Crosshair,
    title: "Set Cool Goals 🎯",
    description: "Dream big and set goals! We'll cheer you on every step of the way and help you get there 🎊",
  },
  {
    icon: Heart,
    title: "Stay Motivated ❤️",
    description: "Build streaks, earn badges, and feel amazing about your progress! Celebrate every win! 🎉",
  },
  {
    icon: Lightbulb,
    title: "Smart Insights 💡",
    description: "Discover when you study best and what subjects need more love! Let data guide your success! 📚",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
        <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          ⭐ Super Cool Features
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
          Everything You Need to Slay!
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          We've packed all the awesome tools to help you succeed! ❤️
        </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="group border-2 border-primary shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  )
}
