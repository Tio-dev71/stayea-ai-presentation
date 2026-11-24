import React from "react"

export interface SlideData {
  id: string
  number: number
  title: string
  subtitle: string
  category: "Overview" | "Architecture" | "Deep Dive" | "Security & Ops" | "Demo & Results"
  speakerNotes: {
    script: string
    keyPoints: string[]
    faq: { q: string; a: string }[]
  }
  component: React.ComponentType<{ isActive: boolean }>
}

export type Direction = "next" | "prev"
