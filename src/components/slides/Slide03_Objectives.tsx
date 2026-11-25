import React from "react"
import { motion } from "motion/react"
import { Target, Zap, Layers, RefreshCw, ShieldCheck, Check } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
} from "../MorphTransition"

export const Slide03_Objectives: React.FC<{ isActive: boolean }> = () => {
  const items = [
    {
      num: "01",
      title: "Trợ Lý AI CSKH Tùy Biến Prompt 24/7",
      desc: "Xây dựng Chatbot AI CSKH có khả năng tùy biến ngữ cảnh & kịch bản linh hoạt qua System Prompt, thử nghiệm chuyên sâu trên dịch vụ du lịch.",
      tags: ["Gemini 2.5 Flash", "Zero Latency"],
    },
    {
      num: "02",
      title: "Tích Hợp Cổng AI 9router Gateway",
      desc: "Độc lập hoàn toàn với một hãng AI duy nhất, tự động cân bằng tải, bảo mật tuyệt đối API key và phản hồi mượt theo thời gian thực.",
      tags: ["9router Proxy", "Đa Mô Hình"],
    },
    {
      num: "03",
      title: "Tự Động Chốt Đơn & Giữ Chỗ",
      desc: "Hiểu ý định tự nhiên của khách hàng, tự động trích xuất thông tin và khởi tạo phiếu đặt dịch vụ sơ bộ sẵn sàng cho nhân viên duyệt.",
      tags: ["Hành Động Tự Động", "Auto Order"],
    },
    {
      num: "04",
      title: "Mô Hình Hybrid CSKH 2 Chiều",
      desc: "Chuyển tiếp mượt mà từ trợ lý AI sang nhân viên tư vấn trực tiếp khi có yêu cầu đặc biệt, kèm bảng điều khiển Admin Sandbox.",
      tags: ["Human-in-Loop", "Admin Sandbox"],
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header with Morph Top */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.22em] text-amber-300 uppercase">
            04 · MỤC TIÊU & PHẠM VI NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          4 Trụ Cột Giải Pháp Của Đề Tài
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Chuyển đổi từ mô hình Chatbot hỏi-đáp thông thường sang Agentic AI có khả năng tương tác, ra quyết định và tạo giao dịch thật.
        </p>
      </motion.div>

      {/* 4 Pillars Grid with Directional Morph (Left items from left, Right items from right) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 2xl:gap-6 my-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={idx < 2 ? morphLeftVariants : morphRightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="canva-card p-5 sm:p-6 2xl:p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl"
          >
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-500/10 border border-amber-400/40 flex items-center justify-center font-heading font-black text-amber-300 text-base sm:text-lg shadow-[0_0_15px_rgba(245,184,56,0.3)] group-hover:scale-110 transition-transform">
                  {item.num}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
                  Active
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-lg sm:text-xl md:text-xl tracking-wide group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10 mt-5">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-amber-200 text-xs font-mono border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
