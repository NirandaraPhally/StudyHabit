import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">StudyHabit</span>
        </div>

        <Link href="/login">
          <Button variant="outline" size="sm" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
            Login🚀
          </Button>
        </Link>
      </div>
    </header>
  )
}
