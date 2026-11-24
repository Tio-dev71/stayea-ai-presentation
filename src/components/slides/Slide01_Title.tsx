import React from "react"
import { motion } from "motion/react"
import { Sparkles, Bot, ArrowRight, Users, ShieldCheck, Cpu } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide01_Title: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Slide Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-emerald-300 uppercase">
            BÁO CÁO ĐỒ ÁN 1 · KHOA CÔNG NGHỆ THÔNG TIN
          </span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-mono flex items-center gap-2 shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>STAYEA AI Concierge v1.0</span>
        </div>
      </motion.div>

      {/* Main Split Body: Left Content + Right Image Visual Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        {/* Left Column (7 cols): Typography, Feature Highlights & Stats */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Giant Golden Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-2">
              Đề tài Đồ án chuyên ngành
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] gold-gradient-text-pure">
              CHATBOT AI
            </h1>
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1 drop-shadow-lg">
              Chăm Sóc Khách Hàng
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-3 max-w-xl leading-relaxed">
              Hệ thống Trợ lý ảo Du lịch & Tự động điều phối dịch vụ độc bản trên nền tảng <strong className="text-amber-300">STAYEA Phú Quốc</strong> kết hợp cổng định tuyến <strong className="text-emerald-300">AI 9router Gateway</strong>.
            </p>
          </motion.div>

          {/* Quick Pillars List with Circular Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3 pt-1"
          >
            {[
              {
                letter: "01",
                text: "Tư Vấn Tự Nhiên & Chuẩn 5 Sao",
                sub: "Phong cách phục vụ ân cần (Luxury Hospitality Tone), am hiểu tường tận kho dịch vụ.",
              },
              {
                letter: "02",
                text: "Cổng Điều Phối AI 9router Gateway",
                sub: "Độc lập, bảo mật API Key, cân bằng tải và chuẩn hóa phản hồi Real-time Streaming SSE.",
              },
              {
                letter: "03",
                text: "Function Calling & Tạo Phiếu Giữ Chỗ",
                sub: "Tự động trích xuất nhu cầu và khởi tạo đơn đặt sơ bộ vào cơ sở dữ liệu PostgreSQL.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/30 to-amber-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 text-emerald-300 font-bold text-xs shadow-[0_0_12px_rgba(52,211,153,0.3)] group-hover:scale-110 transition-transform">
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

          {/* Key Metric Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 pt-2 max-w-lg"
          >
            <div className="canva-stat-card p-3.5">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold gold-gradient-text block leading-none mb-1">
                &lt; 1.2s
              </span>
              <span className="text-[10px] font-heading font-bold tracking-wider text-amber-200/90 uppercase block">
                ĐỘ TRỄ PHẢN HỒI
              </span>
              <span className="text-[10px] text-slate-400">
                Qua 9router Gateway
              </span>
            </div>

            <div className="canva-stat-card p-3.5">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold gold-gradient-text block leading-none mb-1">
                100%
              </span>
              <span className="text-[10px] font-heading font-bold tracking-wider text-amber-200/90 uppercase block">
                CHÍNH XÁC KHO GIÁ
              </span>
              <span className="text-[10px] text-slate-400">
                Chống ảo giác AI
              </span>
            </div>

            <div className="canva-stat-card p-3.5">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold emerald-gradient-text block leading-none mb-1">
                24 / 7
              </span>
              <span className="text-[10px] font-heading font-bold tracking-wider text-emerald-300 uppercase block">
                TỰ ĐỘNG HÓA
              </span>
              <span className="text-[10px] text-slate-400">
                Chốt đơn tức thì
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Authentic Visual Showcase with Real Image & Luxury Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-500/20 via-amber-500/15 to-transparent blur-3xl pointer-events-none" />

          {/* Canva Visual Card with Real Image */}
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-b from-[#062429]/90 to-[#021114]/95 border border-emerald-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Real Villa Image Banner */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src="/images/villa.jpg"
                alt="STAYEA Luxury Villa Phú Quốc"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062429] via-transparent to-black/40" />

              {/* Floating Pill on Image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Phú Quốc Sanctuary</span>
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[11px] font-heading font-semibold text-amber-300 uppercase tracking-widest block">
                  HỆ SINH THÁI DỊCH VỤ THỰC TẾ
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Biệt Thự Biển · Xe Tự Lái · Tour Cano
                </h3>
              </div>
            </div>

            {/* Bottom Card Specs & AI Feature Highlights */}
            <div className="p-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                <span className="text-slate-400">Ứng dụng thực tế</span>
                <span className="text-emerald-300 font-semibold font-mono">Nền tảng STAYEA</span>
              </div>

              {/* 3 Pill Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-heading uppercase">KIẾN TRÚC</span>
                  <span className="text-amber-300 font-bold font-mono">Agentic + 9router</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-heading uppercase">BẢO MẬT</span>
                  <span className="text-emerald-300 font-bold font-mono">Human-in-the-Loop</span>
                </div>
              </div>

              {/* Team teaser note */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Nhóm thực hiện: 4 thành viên
                </span>
                <span className="text-amber-300 font-semibold flex items-center gap-1">
                  Đồ án chuyên ngành 1
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
