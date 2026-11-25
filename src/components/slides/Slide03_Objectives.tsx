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
      desc: "Tùy biến ngữ cảnh & văn phong qua System Prompt (bộ lệnh thiết lập vai trò và quy tắc cho AI), áp dụng linh hoạt đa ngành nghề.",
      tags: ["System Prompt", "Phản hồi < 1.2s"],
    },
    {
      num: "02",
      title: "Tích Hợp Cổng AI 9router Gateway",
      desc: "Cổng trung gian (Proxy) giúp cân bằng tải đa mô hình, bảo mật khóa API và không bị phụ thuộc một nhà cung cấp duy nhất.",
      tags: ["9router Gateway", "Đa Mô Hình"],
    },
    {
      num: "03",
      title: "Agentic AI Tự Động Tạo Đơn",
      desc: "AI có khả năng tự hành động: trích xuất thông tin khách, kiểm tra lịch trống và khởi tạo phiếu giữ chỗ sơ bộ sẵn sàng duyệt.",
      tags: ["Agentic AI", "Auto Order"],
    },
    {
      num: "04",
      title: "Mô Hình Hybrid CSKH 2 Chiều",
      desc: "Áp dụng Human-in-the-Loop (con người kiểm duyệt & hỗ trợ ca khó), kèm khung Sandbox (môi trường thử nghiệm an toàn) cho Admin.",
      tags: ["Human-in-Loop", "Sandbox Test"],
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
