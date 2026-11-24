import React from "react"
import { motion } from "motion/react"
import { Target, Zap, Layers, RefreshCw, ShieldCheck, Check } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide03_Objectives: React.FC<{ isActive: boolean }> = () => {
  const items = [
    {
      num: "01",
      letter: "壹",
      title: "Trợ Lý Du Lịch Thông Minh 24/7",
      desc: "Xây dựng AI Concierge mang phong cách Luxury Hospitality, am hiểu tường tận hệ sinh thái biệt thự ven biển, xe tự lái và tour cano đảo.",
      tags: ["Gemini 2.5 Flash", "Zero Latency"],
    },
    {
      num: "02",
      letter: "贰",
      title: "Tích Hợp Cổng AI 9router Gateway",
      desc: "Triển khai hạ tầng trung gian độc lập (Port 20128), cân bằng tải, bảo mật API key và chuẩn hóa dữ liệu streaming SSE.",
      tags: ["9router Proxy", "OpenAI Spec"],
    },
    {
      num: "03",
      letter: "叁",
      title: "Function Calling Sinh Đơn Hàng",
      desc: "Trích xuất thực thể tên, SĐT, ngày đi để kích hoạt hàm 'create_booking_draft' lưu phiếu đặt dịch vụ vào PostgreSQL Drizzle ORM.",
      tags: ["Action Tool", "Draft Booking"],
    },
    {
      num: "04",
      letter: "肆",
      title: "Mô Hình Hybrid Human-in-the-Loop",
      desc: "Kết hợp giữa AI tự động hóa và Chuyên viên trực tiếp; cung cấp trang quản trị Admin tùy biến Prompt và thử nghiệm Sandbox an toàn.",
      tags: ["Dual-Mode Chat", "Admin Sandbox"],
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            03 · MỤC TIÊU & PHẠM VI NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          4 Trụ Cột Kỹ Thuật Đề Tài Đồ Án 1
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Xây dựng hệ thống giải quyết trọn vẹn bài toán vận hành kinh doanh thực tế cho nền tảng STAYEA.
        </p>
      </div>

      {/* 4 Majestic Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="p-5 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md hover:border-amber-400/60 transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/50 flex items-center justify-center shrink-0 text-amber-300 font-cinzel font-bold text-lg shadow-[0_0_15px_rgba(245,184,56,0.25)] group-hover:scale-105 transition-transform">
              {it.letter}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-playfair font-bold text-white text-base tracking-wide group-hover:text-amber-300 transition-colors">
                  {it.title}
                </h3>
                <span className="font-cinzel text-xs font-bold text-amber-400/80">{it.num}</span>
              </div>
              <p className="text-xs text-slate-300/90 leading-relaxed mb-3">
                {it.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {it.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-200 border border-amber-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Hệ sinh thái dịch vụ: Biệt thự nghỉ dưỡng · Xe tự lái 4-7 chỗ · Tour cano đảo Phú Quốc</span>
        <span className="text-amber-300 font-cinzel font-semibold">100% TRIỂN KHAI TRÊN CODEBASE THỰC TẾ</span>
      </div>
    </div>
  )
}
