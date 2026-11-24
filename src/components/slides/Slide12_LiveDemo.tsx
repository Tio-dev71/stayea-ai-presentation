import React from "react"
import { motion } from "motion/react"
import { Sparkles, CheckCircle2, Play, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { InteractiveChatDemo } from "../InteractiveChatDemo"

export const Slide12_LiveDemo: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-amber-300 uppercase">
              13 · TRẢI NGHIỆM THỰC TẾ
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
            Demo Tương Tác: STAYEA AI Concierge Widget
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-1">
            Mô phỏng trải nghiệm người dùng thực tế với 3 kịch bản: Tìm kiếm Villa, Tạo đơn đặt xe tự lái và Phòng thủ Prompt Injection.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono shadow-lg backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="font-semibold">Interactive Live Showcase</span>
        </div>
      </div>

      {/* Main Interactive Demo Container */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-auto">
        <InteractiveChatDemo />
      </div>
    </div>
  )
}
