import React from "react"
import { motion } from "motion/react"
import { Sparkles, Bot, Zap, Cpu, Shield, ArrowRight } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide01_Title: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Slide Top Tagline (Like Image 2: "TỔNG QUAN VỀ") */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            BÁO CÁO ĐỒ ÁN 1 · NGHỈ DƯỠNG & CÔNG NGHỆ SỐ
          </span>
        </div>

        <div className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>STAYEA AI 9router Engine</span>
        </div>
      </motion.div>

      {/* Main Split Body: Left Content + Right Majestic Visual */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        {/* Left Col (7 cols): Typography, Bullets & Stat Cards */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Giant Golden Title (Matching Image 2 "BẮC KINH" style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] gold-gradient-text-pure">
              CHATBOT AI
            </h1>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mt-1 drop-shadow-lg">
              Chăm Sóc Khách Hàng
            </h2>
            <p className="text-xs md:text-sm text-amber-200/90 font-medium tracking-wide mt-2">
              Hệ thống Trợ lý ảo Du lịch & Tự động điều phối dịch vụ độc bản Phú Quốc
            </p>
          </motion.div>

          {/* Bullet List with Circular Badges (Matching Image 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3 pt-1"
          >
            {[
              {
                letter: "文",
                text: "Tên định danh: STAYEA Luxury Concierge Agent",
                sub: "Phong cách phục vụ ân cần, sang trọng chuẩn khách sạn 5 sao",
              },
              {
                letter: "🏛",
                text: "Cổng điều phối trung gian: AI 9router Gateway",
                sub: "Độc lập, cân bằng tải, bảo mật token và xử lý streaming SSE",
              },
              {
                letter: "⚡",
                text: "Mô hình ngôn ngữ lớn: Google Gemini 2.5 Flash",
                sub: "Tối ưu hóa thời gian phản hồi cực nhanh dưới 1.2 giây",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/50 flex items-center justify-center shrink-0 text-amber-300 font-bold text-sm shadow-[0_0_12px_rgba(245,184,56,0.3)] group-hover:scale-110 transition-transform">
                  {item.letter}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {item.text}
                  </h4>
                  <p className="text-xs text-slate-300/80 leading-snug">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom 2 Large Stat Cards (Matching Image 2 "12.402" & "16" cards) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 pt-2 max-w-lg"
          >
            {/* Stat Card 1 */}
            <div className="canva-stat-card p-4">
              <span className="font-playfair text-3xl sm:text-4xl font-black gold-gradient-text block leading-none mb-1">
                &lt; 1.2s
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider text-amber-200/90 uppercase block">
                TỐC ĐỘ PHẢN HỒI (TTFT)
              </span>
              <span className="text-[10px] text-slate-400">
                Qua cổng AI 9router nội bộ
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="canva-stat-card p-4">
              <span className="font-playfair text-3xl sm:text-4xl font-black gold-gradient-text block leading-none mb-1">
                100%
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider text-amber-200/90 uppercase block">
                CHÍNH XÁC GIÁ & DỊCH VỤ
              </span>
              <span className="text-[10px] text-slate-400">
                Dynamic Catalog Injection từ DB
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Col (5 cols): Majestic Visual Composition (Temple/Villa + Golden Clouds + Luxury AI) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-transparent blur-2xl" />

          {/* Hero Illustrated Graphic Card */}
          <div className="relative w-full max-w-md p-6 rounded-3xl bg-gradient-to-b from-[#07252a]/90 to-[#031518]/90 border border-amber-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-4">
            {/* Decorative Top Banner */}
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="font-cinzel text-xs font-bold text-amber-200 tracking-wider">
                  STAYEA PHÚ QUỐC
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase">
                Luxury Villa & Tour
              </span>
            </div>

            {/* Simulated 3D Architecture Visual Illustration */}
            <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-t from-[#020b0d] via-[#08282e] to-[#0d3f47] border border-emerald-500/30 flex items-center justify-center p-4 text-center">
              {/* Background mountain / sunset curve */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />

              <div className="relative z-10 space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/40 text-black">
                  <Bot className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-white tracking-wide">
                  AI Concierge Engine
                </h3>
                <p className="text-[11px] text-amber-200/80 max-w-xs mx-auto">
                  Tự động tra cứu kho biệt thự nghỉ dưỡng, lịch xe tự lái và xuất phiếu đặt sơ bộ thời gian thực.
                </p>
              </div>

              {/* Golden Wave accent at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Quick Specs Pill Badges */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 text-center">
                <span className="text-[10px] text-slate-400 block font-cinzel">KIẾN TRÚC</span>
                <span className="text-amber-300 font-bold font-mono">Agentic + Tools</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 text-center">
                <span className="text-[10px] text-slate-400 block font-cinzel">BẢO MẬT</span>
                <span className="text-emerald-300 font-bold font-mono">Human-in-Loop</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Bottom Bar (Info of student & instructor) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 pt-3 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2"
      >
        <div className="flex items-center gap-6">
          <div>
            <span className="text-slate-500 text-[10px] uppercase tracking-wider block">Sinh viên thực hiện:</span>
            <span className="text-amber-200 font-bold">TioDev (Nhóm Đề Tài STAYEA)</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] uppercase tracking-wider block">Giảng viên hướng dẫn:</span>
            <span className="text-white font-medium">Bộ môn Kỹ Thuật Phần Mềm</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-amber-400/90 font-cinzel text-xs font-semibold">
          <span>BẤM PHÍM MŨI TÊN (➔) HOẶC SPACE ĐỂ TIẾP TỤC</span>
        </div>
      </motion.div>
    </div>
  )
}
