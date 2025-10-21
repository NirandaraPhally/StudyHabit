import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary p-1">
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-10 text-center text-white md:px-12 md:py-16">
            {/* Decorative elements */}
            <div className="absolute right-8 top-8 text-4xl opacity-20">🚀</div>
            <div className="absolute bottom-8 left-8 text-4xl opacity-20">⭐</div>

            <div className="relative z-10 mx-auto max-w-3xl space-y-6 px-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Ready to Become a Study Superstar? ⭐</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
                Join 10,000+ students who are already crushing their goals! Start your amazing study journey today! 🎓
              </h2>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-primary shadow-lg hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Create Organization 🚀
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent text-white hover:bg-white/10 hover:scale-105 hover:border-white/80 transition-all duration-200 cursor-pointer"
                >
                  Have Invitation? 📧
                </Button>
              </div>

              <p className="text-sm text-white/80">Students get FREE with an accepted code! 🎉</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
