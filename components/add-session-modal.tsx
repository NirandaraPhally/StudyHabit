"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AddSessionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddSessionModal({ open, onOpenChange }: AddSessionModalProps) {
  const [subject, setSubject] = useState("")
  const [duration, setDuration] = useState("2.5")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the session data
    console.log({ subject, duration, notes })
    // Reset form
    setSubject("")
    setDuration("2.5")
    setNotes("")
    onOpenChange(false)
  }

  const subjects = [
    "Mathematics",
    "Physics", 
    "Chemistry",
    "English",
    "Biology",
    "History",
    "Computer Science",
    "Art",
    "Music",
    "Other"
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Add Study Session ✨
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Tell us about your awesome study session! 🎉
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              What did you study? 📚
            </label>
            <div className="relative">
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full h-10 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                required
              >
                <option value="">Pick a subject</option>
                {subjects.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Duration Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              How long? ⏱️ (hours)
            </label>
            <Input
              type="number"
              step="0.1"
              min="0.1"
              max="24"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full"
              placeholder="2.5"
              required
            />
          </div>

          {/* Notes Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Quick notes? 💭 (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-24 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="What did you learn today?"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Save Session! 🥳
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
