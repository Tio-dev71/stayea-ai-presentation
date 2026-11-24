import React from "react"
import { motion } from "motion/react"
import { Sparkles, Bot, Shield, Cpu, ChevronRight, Zap } from "lucide-react"

export const Slide01_Title: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block">
              ĐỒ ÁN CHUYÊN NGÀNH 1
            </span>
            <span className="text-xs text-slate-400 font-medium">Khoa Công Nghệ Thông Tin & Kỹ Thuật Phần Mềm</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>STAYEA AI Engine v1.0</span>
        </div>
      </motion.div>

      {/* Hero Center */}
      <div className="my-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-900/60 to-teal-900/40 border border-emerald-400/40 text-emerald-200 text-xs font-semibold mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Hệ thống Agentic AI thế hệ mới tích hợp 9router</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4"
        >
          Chatbot AI <span className="text-gradient-emerald">Chăm Sóc Khách Hàng</span> & Tự Động Điều Phối Dịch Vụ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-8"
        >
          Ứng dụng mô hình ngôn ngữ lớn (Gemini 2.5 Flash), cổng điều phối <strong>AI 9router</strong> và kỹ thuật{" "}
          <strong>Function Calling</strong> để tư vấn du lịch độc bản và tự động tạo đơn đặt phòng, xe, tour tại Đảo Ngọc Phú Quốc.
        </motion.p>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-2.5"
        >
          {[
            { label: "AI 9router Gateway", icon: Zap, color: "text-amber-300 border-amber-400/40 bg-amber-950/30" },
            { label: "Gemini 2.5 Flash", icon: Cpu, color: "text-emerald-300 border-emerald-400/40 bg-emerald-950/30" },
            { label: "NestJS Backend", icon: Bot, color: "text-rose-300 border-rose-400/40 bg-rose-950/30" },
            { label: "Next.js 15 & Tailwind", icon: ChevronRight, color: "text-cyan-300 border-cyan-400/40 bg-cyan-950/30" },
            { label: "Drizzle ORM & Postgres", icon: Shield, color: "text-blue-300 border-blue-400/40 bg-blue-950/30" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${item.color}`}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="pt-6 border-t border-emerald-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2"
      >
        <div className="flex items-center gap-6">
          <div>
            <span className="text-slate-500 block">Sinh viên thực hiện:</span>
            <span className="text-slate-200 font-semibold">TioDev (Nhóm Đồ Án STAYEA)</span>
          </div>
          <div>
            <span className="text-slate-500 block">Giảng viên hướng dẫn:</span>
            <span className="text-slate-200 font-semibold">Bộ môn Công Nghệ Phần Mềm</span>
          </div>
        </div>
        <div className="text-emerald-400 font-mono text-[11px]">
          [Phím Mũi tên ➔ hoặc Space để chuyển slide]
        </div>
      </motion.div>
    </div>
  )
}
