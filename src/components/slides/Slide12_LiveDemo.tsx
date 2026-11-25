import React from "react"
import { motion } from "motion/react"
import { Sparkles, CheckCircle2, Play, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { InteractiveChatDemo } from "../InteractiveChatDemo"
import { morphTopVariants, morphCenterVariants } from "../MorphTransition"

export const Slide12_LiveDemo: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 pb-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Compact Header so top line never clips and Chat Preview gets maximum space */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 flex items-center justify-between mb-3 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-heading font-bold tracking-[0.22em] text-amber-300 uppercase">
              13 · TRẢI NGHIỆM THỰC TẾ
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black gold-gradient-text tracking-tight mt-0.5">
            Demo Tương Tác: Chatbot AI Chăm Sóc Khách Hàng
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Ví dụ áp dụng thực tế trong việc chăm sóc khách hàng du lịch cho các hệ thống cung cấp dịch vụ du lịch (Minh họa đa nền tảng).
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs font-mono shadow-lg backdrop-blur-md shrink-0">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="font-semibold">Interactive Live Showcase</span>
        </div>
      </motion.div>

      {/* Main Interactive Demo Container — expanded width & height */}
      <motion.div
        variants={morphCenterVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 w-full flex-1 min-h-0 flex items-center justify-center"
      >
        <InteractiveChatDemo />
      </motion.div>
    </div>
  )
}
