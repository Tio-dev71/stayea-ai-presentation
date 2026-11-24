import React from "react"
import { motion } from "motion/react"
import { Target, Zap, Layers, RefreshCw, ShieldCheck, Check } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide03_Objectives: React.FC<{ isActive: boolean }> = () => {
  const items = [
    {
      num: "01",
      title: "Trợ Lý Du Lịch Thông Minh 24/7",
      desc: "Xây dựng AI Concierge mang phong cách Luxury Hospitality, am hiểu tường tận hệ sinh thái biệt thự ven biển, xe tự lái và tour cano đảo.",
      tags: ["Gemini 2.5 Flash", "Zero Latency"],
    },
    {
      num: "02",
      title: "Tích Hợp Cổng AI 9router Gateway",
      desc: "Triển khai hạ tầng trung gian độc lập (Port 20128), cân bằng tải, bảo mật API key và chuẩn hóa dữ liệu streaming SSE.",
      tags: ["9router Proxy", "OpenAI Spec"],
    },
    {
      num: "03",
      title: "Function Calling Sinh Đơn Hàng",
      desc: "Tự động trích xuất thông tin khách hàng, số người, ngày check-in để tạo đơn giữ chỗ sơ bộ (Draft Booking) trên PostgreSQL.",
      tags: ["Agentic Tool", "Auto Order"],
    },
    {
      num: "04",
      title: "Mô Hình Hybrid CSKH 2 Chiều",
      desc: "Chuyển tiếp mượt mà từ trợ lý AI sang nhân viên tư vấn trực tiếp khi có yêu cầu đặc biệt, kèm bảng điều khiển Admin Sandbox.",
      tags: ["Human-in-Loop", "Admin Sandbox"],
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            04 · MỤC TIÊU & PHẠM VI NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          4 Trụ Cột Giải Pháp Của Đề Tài
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Chuyển đổi từ mô hình Chatbot hỏi-đáp thông thường sang Agentic AI có khả năng tương tác, ra quyết định và tạo giao dịch.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="canva-card p-5 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1"
          >
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-500/10 border border-amber-400/40 flex items-center justify-center font-heading font-bold text-amber-300 text-sm shadow-[0_0_12px_rgba(245,184,56,0.25)] group-hover:scale-110 transition-transform">
                  {item.num}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Active
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-base tracking-wide group-hover:text-amber-300 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300/80 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-4">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-amber-200 text-[10px] font-mono border border-white/10"
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
