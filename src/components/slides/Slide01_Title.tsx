import React from "react"
import { motion } from "motion/react"
import { Sparkles, ArrowRight, Users, ShieldCheck, Zap, Bot, Star } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide01_Title: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Top Header Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-emerald-300 uppercase">
            BÁO CÁO ĐỒ ÁN 1 · KHOA CÔNG NGHỆ THÔNG TIN
          </span>
        </div>

        <div className="px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono flex items-center gap-2 shadow-xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="font-semibold">STAYEA AI Concierge v1.0</span>
        </div>
      </motion.div>

      {/* Main Split Body: Left Typography & Stats | Right Giant Showcase Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 my-auto items-center">
        {/* Left Column (7 cols): Typography, Feature Highlights & Stats */}
        <div className="lg:col-span-7 space-y-6 xl:space-y-8">
          {/* Main Giant Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-heading font-semibold mb-3 shadow-md">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Đề tài Đồ án chuyên ngành</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] gold-gradient-text-pure">
              CHATBOT AI
            </h1>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mt-1.5 drop-shadow-lg">
              Chăm Sóc Khách Hàng
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 font-medium tracking-wide mt-3.5 leading-relaxed">
              Hệ thống Trợ lý ảo Du lịch & Tự động điều phối dịch vụ độc bản trên nền tảng <strong className="text-amber-300 font-bold">STAYEA Phú Quốc</strong> kết hợp cổng định tuyến <strong className="text-emerald-300 font-bold">AI 9router Gateway</strong>.
            </p>
          </motion.div>

          {/* 3 Value Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3.5 pt-1"
          >
            {[
              {
                letter: "01",
                text: "Tư Vấn Tự Nhiên & Chuẩn 5 Sao",
                sub: "Phong cách phục vụ ân cần (Luxury Hospitality Tone), am hiểu tường tận hệ sinh thái du lịch.",
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
              <div key={idx} className="flex items-start gap-4 group p-2.5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-amber-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 text-emerald-300 font-heading font-black text-sm sm:text-base shadow-[0_0_15px_rgba(52,211,153,0.35)] group-hover:scale-110 transition-transform">
                  {item.letter}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-heading font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {item.text}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-snug mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Key Metric Highlights - Large & Impactful */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 pt-2"
          >
            <div className="canva-stat-card p-4 sm:p-5">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text block leading-none mb-1.5">
                &lt; 1.2s
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-heading font-bold tracking-wider text-amber-200/90 uppercase block">
                ĐỘ TRỄ PHẢN HỒI
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">
                Qua 9router Gateway
              </span>
            </div>

            <div className="canva-stat-card p-4 sm:p-5">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text block leading-none mb-1.5">
                100%
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-heading font-bold tracking-wider text-amber-200/90 uppercase block">
                CHÍNH XÁC KHO GIÁ
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">
                Chống ảo giác AI
              </span>
            </div>

            <div className="canva-stat-card p-4 sm:p-5">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-black emerald-gradient-text block leading-none mb-1.5">
                24 / 7
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-heading font-bold tracking-wider text-emerald-300 uppercase block">
                TỰ ĐỘNG HÓA
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">
                Chốt đơn tức thì
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Large Visual Card with Real Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/25 via-amber-500/20 to-transparent blur-3xl pointer-events-none" />

          {/* Canva Visual Card with Real Image */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#062429]/95 to-[#021114]/98 border-2 border-emerald-500/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            {/* Real Villa Image Banner - Generous Height */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-88 xl:h-96 w-full overflow-hidden">
              <img
                src="/images/villa.jpg"
                alt="STAYEA Luxury Villa Phú Quốc"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062429] via-transparent to-black/40" />

              {/* Floating Pill on Image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Phú Quốc Sanctuary</span>
              </div>

              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-xs sm:text-sm font-heading font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  HỆ SINH THÁI DỊCH VỤ THỰC TẾ
                </span>
                <h3 className="text-white font-heading font-black text-xl sm:text-2xl leading-tight">
                  Biệt Thự Biển · Xe Tự Lái · Tour Cano
                </h3>
              </div>
            </div>

            {/* Bottom Card Specs & AI Feature Highlights */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm pb-2.5 border-b border-white/10">
                <span className="text-slate-400 font-medium">Ứng dụng thực tế:</span>
                <span className="text-emerald-300 font-bold font-mono text-sm sm:text-base">Nền tảng STAYEA Phú Quốc</span>
              </div>

              {/* 2 Big Pill Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                  <span className="text-[11px] sm:text-xs text-slate-400 block font-heading uppercase tracking-wider mb-0.5">
                    KIẾN TRÚC
                  </span>
                  <span className="text-amber-300 font-black font-mono text-sm sm:text-base">
                    Agentic + 9router
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
                  <span className="text-[11px] sm:text-xs text-slate-400 block font-heading uppercase tracking-wider mb-0.5">
                    BẢO MẬT
                  </span>
                  <span className="text-emerald-300 font-black font-mono text-sm sm:text-base">
                    Human-in-the-Loop
                  </span>
                </div>
              </div>

              {/* Team teaser note */}
              <div className="flex items-center justify-between pt-1 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-2 text-slate-400 font-medium">
                  <Users className="w-4 h-4 text-emerald-400" />
                  Nhóm thực hiện: 4 thành viên
                </span>
                <span className="text-amber-300 font-heading font-bold flex items-center gap-1">
                  Đồ án chuyên ngành 1
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
