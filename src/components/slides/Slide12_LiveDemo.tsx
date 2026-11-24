import React from "react"
import { motion } from "motion/react"
import { Sparkles, CheckCircle2, Play, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { InteractiveChatDemo } from "../InteractiveChatDemo"

export const Slide12_LiveDemo: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
              13 · TRẢI NGHIỆM THỰC TẾ
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black gold-gradient-text tracking-tight mt-0.5">
            Demo Tương Tác: STAYEA AI Concierge Widget
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-mono shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Interactive Live Showcase</span>
        </div>
      </div>

      {/* Main Interactive Demo Container */}
      <div className="relative z-10 w-full flex-1 max-h-[78vh] flex items-center justify-center my-auto">
        <InteractiveChatDemo />
      </div>
    </div>
  )
}
