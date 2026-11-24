import React from "react"
import { motion } from "motion/react"
import { Cpu, Server, Zap, CheckCircle2, Shield, Layers } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide04_TechStack: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            04 · CÔNG NGHỆ & HẠ TẦNG KỸ THUẬT
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Kiến Trúc Phân Tầng & AI 9router
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Hạ tầng phân tách độc lập giữa ứng dụng web và các mô hình ngôn ngữ lớn thông qua AI Router Gateway.
        </p>
      </div>

      {/* 3 Columns Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        {/* Col 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4 border border-cyan-400/40">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-playfair font-bold text-white text-lg mb-1">Presentation Layer</h3>
            <span className="text-xs text-amber-300 font-mono block mb-3">Next.js 15 & React 19</span>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Concierge Widget nhúng trực tiếp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Chuyển đổi Dual-Mode (AI / Chuyên viên)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Thẻ Booking Preview Card tương tác</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Admin Sandbox Prompt Tester</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-slate-400">
            Module: apps/admin-shadcn
          </div>
        </motion.div>

        {/* Col 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-3xl bg-gradient-to-b from-[#092b30]/90 to-[#041619]/90 border border-amber-400/50 shadow-2xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 border border-emerald-400/40">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-playfair font-bold text-white text-lg mb-1">Core Business Engine</h3>
            <span className="text-xs text-emerald-300 font-mono block mb-3">NestJS & Drizzle ORM</span>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Thực thi Function Tools (`create_booking_draft`)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Đồng bộ Dynamic Catalog từ DB thật</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rate limiting (@Throttle: 20req/5m)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Smart Local Fallback khi Gateway lỗi</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-500/20 font-mono text-[10px] text-emerald-300">
            Module: apps/api (stayea/ai-agent)
          </div>
        </motion.div>

        {/* Col 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4 border border-amber-400/40">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-playfair font-bold text-white text-lg mb-1">AI 9router Gateway</h3>
            <span className="text-xs text-amber-300 font-mono block mb-3">Port :20128 (Internal Gateway)</span>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Chuẩn hóa OpenAI Chat Completions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Quản lý API Token bảo mật tập trung</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Định tuyến Gemini 2.5 Flash / Claude</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Xử lý Server-Sent Events (`\ndata: [DONE]`)</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-amber-300">
            Service: AI_ROUTER_URL
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Không phụ thuộc cứng vào bất kỳ nhà cung cấp Cloud AI nào</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
