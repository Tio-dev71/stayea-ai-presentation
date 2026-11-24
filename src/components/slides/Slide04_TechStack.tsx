import React from "react"
import { motion } from "motion/react"
import { Cpu, Server, Network, Shield, ArrowRight, CheckCircle2, Zap } from "lucide-react"

export const Slide04_TechStack: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>04 / CÔNG NGHỆ & HẠ TẦNG</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Kiến Trúc Kỹ Thuật & <span className="text-gradient-emerald">AI 9router Gateway</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Hạ tầng phân tầng độc lập: Cổng điều phối AI Router phân tách rõ ràng giữa ứng dụng và mô hình ngôn ngữ lớn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        {/* Col 1: Frontend Client */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 rounded-2xl bg-[#061d20] border border-emerald-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-3 border border-cyan-400/30">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Presentation Layer</h3>
            <span className="text-xs text-cyan-300 font-mono block mb-3">Next.js 15 & React 19</span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Concierge Widget nhúng trực tiếp</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Chuyển đổi Dual-Mode (AI / Chuyên viên)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Thẻ Booking Preview Card tương tác</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Admin Sandbox Prompt Tester</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-500/10 text-[11px] text-slate-400 font-mono">
            apps/admin-shadcn
          </div>
        </motion.div>

        {/* Col 2: Backend API Engine */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 rounded-2xl bg-[#092b30] border border-emerald-400/40 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3 border border-emerald-400/40">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Core Business Engine</h3>
            <span className="text-xs text-emerald-300 font-mono block mb-3">NestJS & Drizzle ORM</span>
            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Thực thi Function Tools (`create_booking_draft`)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Đồng bộ Dynamic Catalog từ DB thật</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rate limiting (@Throttle: 20req/5m)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Smart Local Fallback khi Gateway lỗi</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[11px] text-emerald-300 font-mono">
            apps/api (modules/stayea/ai-agent)
          </div>
        </motion.div>

        {/* Col 3: AI 9router Gateway */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 rounded-2xl bg-[#061d20] border border-amber-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3 border border-amber-400/30">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">AI 9router Gateway</h3>
            <span className="text-xs text-amber-300 font-mono block mb-3">Endpoint: 127.0.0.1:20128/v1</span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Tương thích chuẩn OpenAI Chat Completions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Quản lý API Token bảo mật tập trung</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Định tuyến mô hình: Gemini 2.5 Flash / Claude</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Xử lý Server-Sent Events (`\ndata: [DONE]`)</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-500/10 text-[11px] text-amber-300 font-mono">
            AI_ROUTER_URL: :20128
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Công nghệ sử dụng</span>
        <span className="text-amber-300 font-semibold">Ưu điểm: Không phụ thuộc cứng vào bất kỳ nhà cung cấp Cloud AI nào</span>
      </div>
    </div>
  )
}
