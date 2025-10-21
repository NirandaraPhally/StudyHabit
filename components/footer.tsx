import { BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-[#1d293d] to-[#1c398e] text-white">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-white">StudyHabit</span>
          </div>

          <p className="text-center text-sm text-white/80">
            © 2025 StudyHabit. Made with ❤️ for students everywhere!
          </p>
        </div>
      </div>
    </footer>
  )
}
